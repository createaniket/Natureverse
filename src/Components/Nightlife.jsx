import React from 'react'
import headerimg from '../Assets/nightfour.jpg'
import './Forest.css'
import forestwo from '../Assets/night 1.jpg'
import forestthree from '../Assets/nightfour.jpg'
import forestfour from '../Assets/night 2.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Nightlife = () => {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng= 115.1391;
    const lat= 36.1716;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom:9
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
                <p>Places</p>
              </div>
              <div className="data">
                <p>LAS VEGAS</p>
                <p>PARIS</p>
                <p>GREECE</p>

                <p>HUNGRY</p>
              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Things to Explore</p>
              </div>
              <div className="data">
                <p>Lightings</p>
                <p>Pubs</p>
                <p>Nightclubs</p>
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p>Whole year</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>NIGHT LIFE</h4>
            </div>
            <div className='abovep'> 
            <p>Nightlife is a collective term for entertainment that is available and generally more popular from the late evening into the early hours of the morning. It includes pubs, bars, nightclubs, parties, live music, concerts, cabarets, theatre, cinemas, and shows.</p>


            </div>
            <div className="lowerp">

            <p > 
            The first nightclubs appeared in New York City in the 1840s and 1850s, including McGlory's, and the Haymarket. They enjoyed a national reputation for vaudeville, live music, and dance. They tolerated unlicensed liquor, commercial sex, and gambling cards, chiefly Faro. </p>
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

export default Nightlife