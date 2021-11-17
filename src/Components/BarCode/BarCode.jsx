import React from "react";
import "../OpenPage/OpenPage.css";
import DisplayScan from "../Scanner/DisplayScan.jsx";

function OpenPage() {
  return (
    <div>
      <button className="image-Head1"> </button>
      <div className="search-Location1">
        <DisplayScan />
      </div>
    </div>
  );
}

export default OpenPage;
