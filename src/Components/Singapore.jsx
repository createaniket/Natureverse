import React from 'react'
import headerimg from '../Assets/singapore.jpg'
import './Forest.css'
import forestwo from '../Assets/singapore 3.jpg'
import forestthree from '../Assets/singaporeo.jpg'
import forestfour from '../Assets/singapore 2.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Navforcomp from './Navforcomp'
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Singapore = () => {

    
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


        <p id='heading'>QUICK FACTS</p>



        <div className="headingsplace">
            <div className='place'>
            <p>Place</p> 
            </div>
            <div className="data">
            <p>
            Country - Singapore

            </p>

            <p>
           
           Continent - ASIA

            </p>

       
            </div>
        </div>

        <div className="headingsfood">
            <div className='place'>
            <p>Best food items</p> 
            </div>
            <div className="data">
            <p>Bak chor mee</p>


            <p>   
            Nasi padang

            </p>
            <p>Laksa</p>
            <p>Kaya toast and eggs</p>
            <p>Sugarcane juice</p>
            </div>
        </div>

        <div className="headingstime">
            <div className='place'>
            <p>Best time to visit</p> 
            </div>
          <p>December, Jan to Jun</p>
        </div>

        </div>
        <div className="right">

            <div className="headingh">

            <h4>Singapore</h4>
            </div>
            <div className='abovep'> 


                <p>Singapore is famous for being a global financial center, being among the most densely populated places in the world, having a world-class city airport with a waterfall, and a Botanic Garden that is a World Heritage Site.</p>

            </div>
            <div className="lowerp">

            <p > 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil porro quos quaerat dicta rem ut, cum ipsam doloremque voluptatem corrupti assumenda vitae unde et, eaque vel!</p>
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

export default Singapore