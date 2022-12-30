import React from "react";
import singapore from "../Assets/starmain.jpg";
import "./Inspiringideas.css";
import winter from "../Assets/winter.jpg";
import forest from "../Assets/forest.jpg";
import city from "../Assets/city 1.jpg";
import night from "../Assets/night main.jpg";
import ocean from "../Assets/oceanone.jpg";
import { Link } from "react-router-dom";

const Inspiringideas = () => {
  return (
    <div className="collectall" id="insprid">
      <h2>Inspiring Ideas for your next Holiday</h2>
      <div className="main">
        <div className="aboveline">
          <div class="item1" style={{ width: "18rem" }}>
            <Link to="/forest">
              <p>FOREST</p>
              <img src={forest} class="card-img-top" alt="..." />
            </Link>
          </div>

          <div class="item2" style={{ width: "18rem" }}>
            <Link to="/hillsnow">
              <p id="hill">HILL-SNOW</p>
              <img src={winter} class="card-img-top" alt="..." />
            </Link>
          </div>

          <div class="item3" style={{ width: "18rem" }}>
            <Link to="/city">
              <p>CITY WONDERER</p>

              <img src={city} class="card-img-top" alt="..." />
            </Link>
          </div>
        </div>

        <div className="lowerline">
          <div class="item4" style={{ width: "18rem" }}>
            <Link to="/stargazing">
              <p>STAR GAZING</p>

              <img src={singapore} class="card-img-top" alt="..." />
            </Link>
          </div>

          <div class="item5" style={{ width: "18rem" }}>
            <p>OCEAN ADVENTURE</p>

            <Link to="/ocean">
              <img src={ocean} class="card-img-top" alt="..." />
            </Link>
          </div>

          <div class="item6" style={{ width: "18rem" }}>
            <Link to="/nightlife">
              <p>NIGHT LIFE</p>

              <img src={night} class="card-img-top" alt="..." />
            </Link>
          </div>
        </div>
      </div>


    
    </div>
  );
};

export default Inspiringideas;
