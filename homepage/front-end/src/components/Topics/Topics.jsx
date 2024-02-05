import React, { useState } from 'react'
import './Topics.css'
import {frequencies, daw, vocalProcessiong, mixing, mastering, bgElement2, mixingConsole} from '../../assets'

const Topics = () => {

  const [currentImage, setCurrentImage] = useState(frequencies);


  return (
    <section id='topics' className='black'>
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className='topics-list'>
            <li onMouseEnter={()=> setCurrentImage(frequencies)}>
              What are Frequencies?
            </li>
            <li onMouseEnter={()=> setCurrentImage(daw)}>
              Using the Daw
            </li>
            <li onMouseEnter={()=> setCurrentImage(vocalProcessiong)}>
              Vocal Processing
            </li>
            <li onMouseEnter={()=> setCurrentImage(mixing)}>
              Mixing
            </li>
            <li onMouseEnter={()=> setCurrentImage(mixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={()=> setCurrentImage(mastering)}>
              Mastering
            </li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img className='bgelement1' src={bgElement2} alt="" />
      </div>
    </section>
  )
}

export default Topics