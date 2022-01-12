import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PublicRoute({
  children,
  resricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && resricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
