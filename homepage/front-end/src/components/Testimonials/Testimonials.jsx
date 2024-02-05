import React from 'react'
import './Testimonials.css'
import {Testimonial1, Testimonial2, Testimonial3} from '../../assets'

const Testimonials = () => {
  return (
    <section className="dark-gray" id="testimonials">
      <div className="wrapper">
        <h2>What Our students say</h2>
        <div className="content-container">

          <div className="testimonial">
            <img src={Testimonial1} alt="" />
            <div className="reviewer-detais">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">This is a great course. I got to learn a lot.</div>
            </div>
          </div>
       

          <div className="testimonial">
            <img src={Testimonial2} alt="" />
            <div className="reviewer-detais">
              <div className="name">Robert Fox</div>
              <div className="company-name">Meta</div>
              <div className="review">I got to learn a lot about Music Production with this course. Thanks :)</div>
            </div>
          </div>
        

        
          <div className="testimonial">
            <img src={Testimonial3} alt="" />
            <div className="reviewer-detais">
              <div className="name">Emily Smith</div>
              <div className="company-name">Apple</div>
              <div className="review">Awesome! Great job!!</div>
            </div>
          
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials