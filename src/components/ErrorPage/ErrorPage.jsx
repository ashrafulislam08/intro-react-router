import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h2>{error.statusText || error.statusMessage}</h2>
      {error.status === 404 && (
        <div>
          <h2>Page not found</h2>
          <p>Go Back to Home</p>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
