import React from "react";
import "./AppDownloads.css";
import { assets } from "../../assets/assets";

const AppDownloads = () => {
  return (
    <div className="app-downloads" id="app-downloads">
      <p>
        For Better Experience Download <br /> Toamto App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownloads;
