import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
