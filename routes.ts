/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes: string[] = [
  "/",
  "/auth/new-verification",
  "/dashboard/doctor",
  "/dashboard/doctor/sessions",
  "/dashboard/user",
  "/dashboard/user/*",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 */

export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
