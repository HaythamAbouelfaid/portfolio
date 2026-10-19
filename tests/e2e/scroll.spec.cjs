const { test, expect } = require("@playwright/test");

const casePath = "/work/12-aws-cloud-soc-detection-investigation-response";
const routes = ["/", "/work", casePath];

for (const route of routes) {
  test(`continuous downward scroll does not jump upward on ${route}`, async ({ page }, testInfo) => {
    const browserErrors = [];
    page.on("pageerror", error => browserErrors.push(error.message));
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await page.locator("body").waitFor({ state: "visible" });

    // Collect an evidence trace while scrolling in the viewport, including
    // user route/hash changes and document height. Never mutate application code.
    await page.evaluate(() => {
      window.__scrollEvidence = [];
      const takeSample = (phase) => window.__scrollEvidence.push({
        phase, t: Math.round(performance.now()), y: Math.round(window.scrollY),
        height: document.documentElement.scrollHeight,
        href: window.location.href,
      });
      window.__takeScrollSample = takeSample;
      window.addEventListener("scroll", () => takeSample("scroll"), { passive: true });
      takeSample("loaded");
    });

    for (let i = 0; i < 40; i++) {
      // Drive a normal downward-only sequence all the way to the document end.
      // Touch emulation scrolls the page directly for cross-device consistency.
      const atBottom = await page.evaluate(() =>
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6
      );
      if (atBottom) break;
      await page.evaluate(() => window.scrollBy({ top: 420, behavior: "instant" }));
      await page.waitForTimeout(200);
      await page.evaluate(() => window.__takeScrollSample("after-downward-input"));
    }

    await page.waitForTimeout(700);
    const settled = await page.evaluate(() => {
      window.__takeScrollSample("settled");
      return window.scrollY;
    });
    await page.waitForTimeout(15_000);
    const evidence = await page.evaluate(() => {
      window.__takeScrollSample("after-15s");
      return window.__scrollEvidence;
    });

    await testInfo.attach("scroll-evidence.json", {
      body: JSON.stringify({ route, project: testInfo.project.name, evidence, browserErrors }, null, 2),
      contentType: "application/json",
    });
    await page.screenshot({ path: testInfo.outputPath("scroll-final.png"), fullPage: true });
    expect(browserErrors, "No unhandled browser exceptions").toEqual([]);
    const downwardSamples = evidence.filter(item => item.phase === "after-downward-input");
    for (let index = 1; index < downwardSamples.length; index++) {
      expect(downwardSamples[index].y,
        "Downward-only input must not trigger a major upward jump")
        .toBeGreaterThanOrEqual(downwardSamples[index - 1].y - 100);
    }
    expect(evidence.at(-1).y +  Math.max(0, await page.evaluate(() => window.innerHeight)),
      "Scrolling should reach the end of a finite document")
      .toBeGreaterThanOrEqual(evidence.at(-1).height - 120);
    expect(evidence.at(-1).href.split("#")[0], "No unexpected route navigation")
      .toContain(route === "/" ? "/" : route);
    expect(evidence.at(-1).y, "The viewport should not snap significantly up after input ends")
      .toBeGreaterThanOrEqual(settled - 100);
  });
}

test("hash navigation remains deliberate and manual scroll is not repeatedly overridden", async ({ page }, testInfo) => {
  await page.goto(casePath + "#at-a-glance", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#at-a-glance")).toBeVisible();
  await page.waitForTimeout(1500);
  const atAnchor = await page.evaluate(() => window.scrollY);
  await page.evaluate(() => window.scrollBy({ top: 650, behavior: "instant" }));
  await page.waitForTimeout(650);
  const moved = await page.evaluate(() => window.scrollY);
  await page.waitForTimeout(15_000);
  const after = await page.evaluate(() => window.scrollY);
  await testInfo.attach("anchor-scroll.json", {
    body: JSON.stringify({ atAnchor, moved, after, url: page.url() }, null, 2),
    contentType: "application/json",
  });
  expect(moved).toBeGreaterThan(atAnchor);
  expect(after).toBeGreaterThanOrEqual(moved - 100);
  expect(new URL(page.url()).hash).toBe("#at-a-glance");
});

test("reduced-motion anchor navigation stays functional", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(casePath + "#historical-october-13-2026-acceptance");
  await expect(page.locator("#historical-october-13-2026-acceptance")).toBeVisible();
  await expect.poll(async () => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
});

test("back-forward history restores a meaningful scroll position", async ({ page }) => {
  await page.goto("/work", { waitUntil: "load" });
  await page.evaluate(() => window.scrollTo({ top: 1100, behavior: "instant" }));
  const before = await page.evaluate(() => window.scrollY);
  expect(before).toBeGreaterThan(200);
  await page.goto(casePath, { waitUntil: "load" });
  await page.goBack({ waitUntil: "load" });
  await expect(page).toHaveURL(/\/work\/?$/);
  await expect.poll(async () => page.evaluate(() => window.scrollY))
    .toBeGreaterThanOrEqual(before - 250);
  await page.goForward({ waitUntil: "load" });
  await expect(page).toHaveURL(new RegExp(casePath.replaceAll("/", "\\/") + "$"));
});
