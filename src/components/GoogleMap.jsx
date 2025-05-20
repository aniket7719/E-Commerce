// components/GoogleMap.jsx
import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-container" style={styles.container}>
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=India&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        style={styles.iframe}
        allowFullScreen
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "400px",
    margin: "2rem 0",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
};

export default GoogleMap;
