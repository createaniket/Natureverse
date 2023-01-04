import React from "react";
import Faq from "./Faq";
import Inspiringideas from "./Inspiringideas";
import Video from "./Video";
import Wherenext from "./Wherenext";

const Home = () => {
  return (
    <div>
      <Video />
      <Wherenext />
      <Inspiringideas />

      <div className="thingstoknowheading" id="reqr">
        <p>Things to know before travelling</p>

        <div className="thingstoknow">
          <div className="visa">
            <i class="fa-sharp fa-solid fa-passport fa-10x" id="visaicon"></i>{" "}
            <div className="contentvisa">Visas</div>
          </div>

          <div className="travelregulation">
            <i class="fa-solid fa-ship fa-10x" id="shipicon" ></i>
            <div className="contentvisa">Travel Regulations</div>{" "}
          </div>

          <div className="traveltips">
            <i class="fa-solid fa-plane-up fa-10x" id="flyicon"></i>
            <div className="contentvisa">Travel Tips</div>{" "}
          </div>
        </div>
      </div>

      <Faq />
    </div>
  );
};

export default Home;
