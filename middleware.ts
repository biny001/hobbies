export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/dashboard/:path*"], // Protects /dashboard and any sub-routes
};
