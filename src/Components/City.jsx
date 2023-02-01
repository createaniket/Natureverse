import React from 'react'
import headerimg from '../Assets/city 1.jpg'
import './Forest.css'
import forestwo from '../Assets/city 3.jpg'
import forestthree from '../Assets/city 2.jpg'
import forestfour from '../Assets/city 4.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const City = () => {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng= 12.3155;
    const lat= 45.4408;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom:11
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
                <p>Paris (Best)</p>
                <p>Italy</p>

                <p>Denmark</p>
                <p>Spain</p>
              </div>
            </div>

            <div className="headingsfood">
            <div className="place">
                <p>Things to Explore</p>
              </div>
              <div className="data">
                <p>Culture </p>
                <p>photography</p>
                {/* <p>listening to birds</p> */}
                <p>Architecture</p>
             
              </div>
            
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> The Full Year</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>Cities to Wonder</h4>
            </div>
            <div className='abovep'> 
            <p>The demand for travel to cities has greatly increased over the last few decades. While many travel for business or convention purposes, others are traveling on leisure time to learn about other cultures, to develop their specific interests, and to seek entertainment.</p>
            </div>
            <div className="lowerp">

          <p>Tourists' expectations when visiting a particular place are related to several features of the chosen destination: culture, architecture, gastronomy, infrastructure, landscape, events, shopping, etc. These features attract people to the destination and contribute to the overall experience of the trip.</p>
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

export default City