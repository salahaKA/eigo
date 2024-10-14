import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthStateContext } from "../Contexts/auth";

function RouteWrapper({ component: Component, layout: Layout, isPrivate = false, ...rest }) {
  const { isLoggedIn } = useContext(AuthStateContext);
  const location = useLocation(); // Get the current location

  // Check if the route is private and user is not logged in
  if (isPrivate && !isLoggedIn) {
    return (
      <Navigate
        to="/auth"
        state={{ from: location }} // Redirect to the auth page with the current location
      />
    );
  }

  // Return the layout with the component if the route is public or user is logged in
  return (
    <Layout {...rest}>
      <Component {...rest} />
    </Layout>
  );
}

export default RouteWrapper;
