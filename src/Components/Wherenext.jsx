import React from "react";
import "./Wherenext.css";
import singapore from "../Assets/singapore.jpg";
import maldives from "../Assets/maldives.jpg";
import london from "../Assets/london.jpg";
import ocean from "../Assets/ocean.jpg";
import winter from "../Assets/manalimm.jpg";
import usa from "../Assets/usa.jpg";
import { Link } from "react-router-dom";

const Wherenext = () => {
  
  return (

    <div className="nesc" id="wherenext">
      <div className="maintext">
        <p>PLAN YOUR TRIP</p>
        <h6> <span>
           Where to next ?
          </span>
           </h6>
      </div>

      <div className="container">
        <div class="card" style={{ width: "18rem" }}>
          <Link to="/singapore">
            <img
              id="singapore"
              src={singapore}
              class="card-img-top"
              alt="..."
            />
          </Link>
          <div class="card-body">
            <h5 class="card-text">SINGAPORE</h5>
            <div className="hideshow">Click on the image to explore more</div>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <Link to="/london">
            <img src={london} class="card-img-top" alt="..." />
          </Link>
          <div class="card-body">
            <h5 class="card-text"> LONDON</h5>
            <div className="hideshow">Click on the image to explore more</div>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <Link to="/maldives">
            <img src={maldives} class="card-img-top" alt="..." />
          </Link>
          <div class="card-body">
            <h5 class="card-text"> MALDIVES</h5>
            <div className="hideshow">Click on the image to explore more</div>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <Link to="/miami">
            <img src={ocean} class="card-img-top" alt="..." />
          </Link>
          <div class="card-body">
            <h5 class="card-text">MIAMI</h5>
            <div className="hideshow">Click on the image to explore more</div>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <Link to="/manali">
            <img src={winter} class="card-img-top" alt="..." />
          </Link>
          <div class="card-body">
            <h5 class="card-text">MANALI</h5>
            <div className="hideshow">Click on the image to explore more</div>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <Link to="/usa">
            <img src={usa} class="card-img-top" alt="..." />
          </Link>
          <div class="card-body">
            <h5 class="card-text">U.S.A</h5>
            <div className="hideshow">Click on the image to explore more</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wherenext;
