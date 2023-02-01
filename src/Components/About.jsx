import React from 'react'
import './About.css'
import Navforcomp from './navforcomp'

const About = () => {
    return (
        <div className='about' id='about'>
            <Navforcomp />
            <div className='container'>
                {/* <img src={sautank} alt='john' /> */}
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Intense is an College level gaming group. Working with Intense gives me the ability to advise intercollege expatriates living in the middle east from where I live in India.</p>
                    <p>I am Shwetank Kushwaha, a senior advisor for an independently owned gaming planning group called Intense.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
