import React from "react";
import headerimg from "../Assets/Londonmid.jpg";
import "./Forest.css";
import forestwo from "../Assets/london 2.jpg";
import forestthree from "../Assets/london2.jpg";
import forestfour from "../Assets/london 4.jpg";

import { useRef, useEffect } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from "./Navforcomp";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug";

const London = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 77.1892;
  const lat = 32.2432;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: 7,
    });
  });
  return (
    <div className="all">
      <Navforcomp />
      <div className="mainimage">
        <img src={headerimg} alt="" />
      </div>

      <div className="restall">
        <div className="columncontainer">
          <div className="left">
            <p id="heading">QUICK FACTS</p>

            <div className="headingsplace">
              <div className="place">
                <p>Place</p>
              </div>
              <div className="data">
                <p>Country - England</p>

                <p>Continent - EUROPE</p>
              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Best food items</p>
              </div>
              <div className="data">
                <p>Duck Waffle</p>
                <p>Crab donuts</p>
                <p>Bangers and Mash</p>
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> from June to August</p>
            </div>
          </div>
          <div className="right">
            <div className="headingh">
              <h4>London</h4>
            </div>
            <div className="abovep">
              <p>
                It is the largest metropolis in the United Kingdom, and it is
                also the country's economic, transportation, and cultural
                centre. In addition to its history, art, and politics, London is
                a popular tourist destination for its wide variety of museums,
                shops, restaurants, and sports teams.
              </p>
            </div>
            <div className="lowerp">
              <p>
                London is the capital and largest city of England and the United
                Kingdom, with a population of just under 9 million.
              </p>
            </div>
          </div>
        </div>

        <div className="allimages">
          <img src={forestwo} alt="imageone" />
          <img src={forestthree} alt="imagetwo" />
          <img src={forestfour} alt="imagethree" />
        </div>

        <div className="formapclip">
          <div className="maph">
            <div ref={mapContainer} className="map-container" />
          </div>

          <div className="green"></div>
        </div>

        <div className="lastbox">
          <div className="box">
            <h3>What are you waiting for?</h3>

            <p>Go for a trip now!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default London;
