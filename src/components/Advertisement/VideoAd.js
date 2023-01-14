import React from "react";

import BatteriRecondVideoDesktop from "../../images/batteri-recond-add.mp4";
import "./style.css";

const MobileVideoAd = () => {
  return (
    <div className="video-ad-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={BatteriRecondVideoDesktop}
        type="video/mp4"
        className="video-ad"
      />
    </div>
  );
};

export default MobileVideoAd;
