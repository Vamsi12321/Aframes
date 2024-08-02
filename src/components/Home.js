import React from "react";
import IframeComponent from "./IframeComponent";

function Home({ config }) {
  return (
    <div>
      <h1>Welcome to {config.appName}</h1>
      <IframeComponent />
    </div>
  );
}

export default Home;
