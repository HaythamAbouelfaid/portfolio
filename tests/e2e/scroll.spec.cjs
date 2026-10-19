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

    for (let i = 0; i < 10; i++) {
      // The same downward-only input on desktop and mobile viewports.
      // Touch-device emulation uses window scrolling since Playwright has no
      // portable touchscreen swipe API across Chromium versions.
      await page.evaluate(() => window.scrollBy({ top: 420, behavior: "instant" }));
      await page.waitForTimeout(300);
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
