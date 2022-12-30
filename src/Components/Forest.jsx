import React from 'react'
import headerimg from '../Assets/forest.jpg'
import './Forest.css'
import forestwo from '../Assets/forest 2.jpg'
import forestthree from '../Assets/forest 3.jpg'
import forestfour from '../Assets/forest 4.jpg'

import { useRef, useEffect} from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2V0MDA3IiwiYSI6ImNsYzc0aTZ0ejAwNTYzcmx0eGNhcG0yZmgifQ.ngoju5iLK-l-1e4wooLjug';

const Forest = () => {

    
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

        </div>
        <div className="right">

            <div className="headingh">

            <h4>Forest</h4>
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

export default Forest