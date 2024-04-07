/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes: string[] = ["/", "/counselors"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /dashboard
 */

export const authRoutes: string[] = ["/sign-up", "/log-in"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix = "/api/trpc";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/user";

/**
 * An array of routes that can be accessed by DOCTOR user role
 */
