import React from 'react'
import headerimg from '../Assets/oceanone.jpg'
import './Forest.css'
import forestwo from '../Assets/ocean 3.jpg'
import forestthree from '../Assets/ocean 2.jpg'
import forestfour from '../Assets/ocean main.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const City = () => {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng=  29.9187;
    const lat= 31.2001;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom:5
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
                <p>GOA - INDIA</p>
                <p>MIAMI - FLORIDA</p>
                <p>TULUM - MEXICO</p>

              </div>
            </div>

            <div className="headingsfood">
              <div className="place">
                <p>Best food items</p>
              </div>
              <div className="data">
                <p>Tuna</p>
                <p>Crab donuts</p>
                <p>Crab</p>
              </div>
            </div>

            <div className="headingstime">
              <div className="place">
                <p>Best time to visit</p>
              </div>
              <p> Avoid rainy seasons</p>
            </div>
          </div>
        <div className="right">

            <div className="headingh">

            <h4>OCEAN ADEVENTURE</h4>
            </div>
            <div className='abovep'> 


            <p>Ocean tourism refers to pleasure travel in which the sea is the primary focus of activities. Ocean tourism comes in many forms including cruises, ecotourism, and fishing expeditions.</p>



            </div>
            <div className="lowerp">

            <p > 
            Also included are tourism activities such as recreational boating, coast- and marine-based ecotourism, cruises, swimming, recreational fishing, snorkeling, and diving </p>
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