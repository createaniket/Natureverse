import React from 'react'
import headerimg from '../Assets/starmain.jpg'
import './Forest.css'
import forestwo from '../Assets/star 2.jpg'
import forestthree from '../Assets/star 3.jpg'
import forestfour from '../Assets/star 4.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Stargazing = () => {

    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng= 69.1328;
    const lat= 23.8634;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom:8
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


        <p id='heading'>QUICK FACTS</p>



        <div className="headingsplace">
            <div className='place'>
            <p>Places</p> 
            </div>
            <div className="data">
            <p>
            The Atacama Desert, Chile

            </p>

            <p>
            Natural Bridges National Monument, Utah, United States

            </p>

            <p>
            Iriomote-Ishigaki National Park, Japan

            </p>
            </div>
        </div>

        <div className="headingsfood">
            <div className='place'>
            <p>Best food items</p> 
            </div>
            <div className="data">
            <p>Patasca – Slow-Cooked Corn and Meat Stew</p>
            <p>Jell-O that pushes this wiggly, jiggly dessert</p>


            <p>   
            Sushi, a dish in Japan and well loved in the Western world

            </p>
            </div>
        </div>

        <div className="headingstime">
            <div className='place'>
            <p>Best time to visit</p> 
            </div>
            <div className="data">
     
            <p>Winters, December-Janauary-febraury for  Atacama Desert </p>
           
            <p>August, September, and October for UTAH</p>
           <p>September-October-November for Japan</p>
            </div>
        </div>


        
        </div>

        <div className="right">

            <div className="headingh">

            <p>Star Gazing</p>
            </div>
            <div className='abovep'> 

            <p >The importance of forests cannot be underestimated. We depend on forests for our survival, from the air we breathe to the wood we use. Besides providing habitats for animals and livelihoods for humans, forests also offer watershed protection, prevent soil erosion and mitigate climate change.</p>

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

export default Stargazing