import React from 'react'
import headerimg from '../Assets/hillsnowlast.jpg'
import './Forest.css'
import forestwo from '../Assets/manalimm.jpg'
import forestthree from '../Assets/snowplushills.jpg'
import forestfour from '../Assets/winter.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Manali = () => {

    
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
                <p>Country - India</p>

                <p>Continent - Asia</p>
              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Best food items</p>
              </div>
              <div className="data">
                <p>Khatta</p>
                <p> Bombay Bhelpuri</p>
                <p> Samosas</p>
            
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> from Mar to Jun</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>Manali</h4>
            </div>
            <div className='abovep'> 
            <p>It is a rustic enclave known for its cool climate and snow-capped mountains, offering respite to tourists escaping scorching heat of the plains. The tourism industry in Manali started booming only in the early 20th century, mainly because of its natural bounties and salubrious climatez</p>

          
            </div>
            <div className="lowerp">
                <p>Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.</p>

    
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

export default Manali