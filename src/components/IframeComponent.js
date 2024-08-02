import React from "react";

const IframeComponent = () => {
  const domain = window.location.hostname;
  const iframeUrl = `https://proxzarai.netlify.app/iframe?pwd=${domain}`;

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
