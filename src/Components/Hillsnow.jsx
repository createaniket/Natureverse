import React from 'react'
import headerimg from '../Assets/winter.jpg'
import './Forest.css'
import forestwo from '../Assets/hillsnow.jpg'
import forestthree from '../Assets/snowplushills.jpg'
import forestfour from '../Assets/hillsnowlast.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Hillsnow = () => {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng=  8.4689;
    const lat= 60.4720;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom:10
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
                <p>India</p>
                <p> Aomori City</p>
                <p>Japan</p>

                <p>Belgium</p>
              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Things to do</p>
              </div>
              <div className="data">
                <p> Skiing</p>
                <p>photography</p>
                {/* <p>listening to birds</p> */}
                <p>camping.</p>
             
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>When to visit</p>
              </div>
              <p>In winters</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>HILL-SNOW</h4>
            </div>
            <div className='abovep'> 
            <p>A hill is a piece of land that rises higher than everything surrounding it. It looks like a little bump in the Earth. Since theyre higher than everything around them, hills are good places to get a nice view. Hills are easier to climb than mountains</p>

           
            </div>
            <div className="lowerp">
                <p>Air surrounding the mountain range is cooler (because of the height) that results in the cooling of water vapors in the air that fall in the form of snow and rain. Plains have a warmer air that does not result in the cooling of water vapors and snow formation.</p>
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

export default Hillsnow