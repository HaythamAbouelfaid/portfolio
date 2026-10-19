"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/resources";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@once-ui-system/core";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [checkedPath, setCheckedPath] = useState<string | null>(null);
  const [authorizedPath, setAuthorizedPath] = useState<string | null>(null);

  // Feature availability is synchronous. Public routes must never be swapped
  // for a temporary spinner: remounting the page loses its scroll position.
  const isRouteEnabled = Boolean(pathname && (
    pathname in routes
      ? routes[pathname as keyof typeof routes]
      : (["/blog", "/work"] as const).some(
          (route) => pathname.startsWith(route) && routes[route],
        )
  ));
  const requiresPassword = Boolean(
    pathname && protectedRoutes[pathname as keyof typeof protectedRoutes]
  );

  useEffect(() => {
    // Only protected paths need an asynchronous authentication check.
    if (!requiresPassword || !pathname) return;
    let cancelled = false;
    setCheckedPath(null);
    setAuthorizedPath(null);

    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/check-auth");
        if (!cancelled && response.ok) setAuthorizedPath(pathname);
      } catch {
        // A failed check falls back to the password form, not protected content.
      } finally {
        if (!cancelled) setCheckedPath(pathname);
      }
    };
    void checkAuthentication();
    return () => { cancelled = true; };
  }, [pathname, requiresPassword]);

  const handlePasswordSubmit = async () => {
    if (!pathname) return;
    try {
      const response = await fetch("/api/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        setAuthorizedPath(pathname);
        setError(undefined);
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Authentication unavailable. Please retry.");
    }
  };

  if (!isRouteEnabled) return <NotFound />;

  // The authorization result is bound to the exact pathname. Never allow a
  // stale successful check to expose another protected route on navigation.
  if (requiresPassword && checkedPath !== pathname) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (requiresPassword && authorizedPath !== pathname) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
