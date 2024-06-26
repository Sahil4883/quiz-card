import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";
export default withMiddlewareAuthRequired();

export const config = {
  /* middleware to protect the dashboard from the unsigned user */
  matcher: ["/dashboard"],
};
