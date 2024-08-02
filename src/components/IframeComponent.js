import React from "react";

const IframeComponent = () => {
  const iframeUrl = `/iframe?pwd=${window.location.hostname}`;

  return (
    <div>
      <iframe
        title="iframeapp"
        src={iframeUrl}
        style={{ width: "40%", height: "300px" }}
      ></iframe>
    </div>
  );
};

export default IframeComponent;
