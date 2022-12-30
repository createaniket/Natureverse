import React from 'react'
import nishavdo from '../Assets/myvdo.mp4'
import './Video.css'

const Video = () => {
  return (

    <>
    
    <div className='main'>

        <video  autoPlay loop src={nishavdo} muted type="video/mp4"></video>


<div className='lineabove'>
  <p className='font-face-gm' style={{color:"aliceblue"}} >
            Not all those who wander
        </p>
        <p className='nicheline' style={{color:"aliceblue"}}> 
            ARE LOST
        </p>
</div>
    </div>
    </>
  )
}

export default Video