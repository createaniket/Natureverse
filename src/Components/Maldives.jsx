import React from 'react'
import headerimg from '../Assets/maldives.jpg'
import './Forest.css'
import forestwo from '../Assets/maldives1.jpg'
import forestthree from '../Assets/maldives2.jpg'
import forestfour from '../Assets/maldives3.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Maldives = () => {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng= 77.1892;
    const lat= 32.2432;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom:7
        });
        });
  return (
    <div className='all'>
      <Navforcomp />

    <div className='mainimage'>
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
                <p>Maldives</p>

                <p>Continent - ASIA</p>
              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Best food items</p>
              </div>
              <div className="data">
                <p>Fried Yams</p>
                <p>Reef Fish Cutlets</p>
                <p>Mas Huni</p>
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> November - April</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>Maldives</h4>
            </div>
            <div className='abovep'> 
            <p>The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities.</p>

            </div>
            <div className="lowerp">

            <p > 
            Maldives is a famous honeymoon destination amongst travellers, but that doesn't mean you have to be legally wedded to share a room or enjoy a vacation in the country.
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

            <div className="green">
            </div>
        </div>

                <div className="lastbox">

                    <div className="box">
                        <h3>What are you waiting for?</h3>

                        <p>Go for a trip now!!</p>
                    </div>
                </div>
   </div>

    </div>
  )
}

export default Maldives