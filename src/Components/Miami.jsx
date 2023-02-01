import React from 'react'
import headerimg from '../Assets/miamiheader.jpg'
import './Forest.css'
import forestwo from '../Assets/miamifirst.jpg'
import forestthree from '../Assets/miamimid.jpg'
import forestfour from '../Assets/miamilast.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Miami = () => {

    
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
                <p>State - Florida</p>

                <p> United States</p>
              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Best food items</p>
              </div>
              <div className="data">
                <p>Chicharron</p>
                <p>Stone crabs</p>
                <p>Cuban sandwi</p>
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> June - August</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>Miami</h4>
            </div>
            <div className='abovep'> 
            <p> Miami is known for its strong Cuban Influence, warm weather, pristine beaches, and great diving sites. The city is also home to some famous teams and landmarks such as the Miami Heat, the iconic Miami tower, and the beautiful Everglades National Park.</p>
            </div>
            <div className="lowerp">

            <p > 
            Spending time around trees and looking at trees reduces stress, lowers blood pressure and improves mood. Numerous studies show that both exercising in forests and simply sitting looking at trees reduce blood pressure as well as the stress-related hormones cortisol and adrenaline.
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

export default Miami