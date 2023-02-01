import React from 'react'
import headerimg from '../Assets/usa.jpg'
import './Forest.css'
import forestwo from '../Assets/Hollywood.jpg'
import forestthree from '../Assets/usamidle.jpg'
import forestfour from '../Assets/usafirst.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Usa = () => {

    
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
                <p>America</p>
                <p>United States</p>

              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Best food items</p>
              </div>
              <div className="data">
                <p>Burger</p>
                <p>Cheese Cake</p>
                <p> Pancakes</p>
        
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> Spring/Autmn</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>U.S.A</h4>
            </div>
            <div className='abovep'> 
            <p>The United States of America is a North American nation that is the world's most dominant economic and military power. Likewise, its cultural imprint spans the world, led in large part by its popular culture expressed in music, movies and television.</p>
          
            </div>
            <div className="lowerp">

            <p > 
            The United States is by far the most famous country in the world. It's famous for its attractions, such as the Grand Canyon, tech innovation, sports.
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

export default Usa