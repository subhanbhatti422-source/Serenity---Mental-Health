import React from 'react'
import "./Space.css"

import SpaceImg1 from '../../../../assets/Img/Space-to-Talk-img1.png'
import  SpaceImg2 from '../../../../assets/Img/Space-to-Talk-img2.png'
// import SpaceImg3  from '../../../../assets/Img/Space-to-Talk-img3.png'
import { ArrowUpRight, ChevronLeft, ChevronRight, Lightbulb, MoreHorizontal,Salad,Ribbon  } from 'lucide-react';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Space = () => {

const spaceRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: spaceRef.current,
        start: "top 75%",
        // markers: true,
      },
    })
    .from(".left-layout", {
      x: -100,
      opacity: 0,
      duration: 1,
    })
    .from(".middle-layout", {
      y: 100,
      opacity: 0,
      duration: 1,
    }, "-=0.5")
    .from(".right-layout", {
      x: 100,
      opacity: 0,
      duration: 1,
    }, "-=0.5");
  }, spaceRef);

  return () => ctx.revert();
}, []);




  return (
    <section className='Space-to-Talk' ref={spaceRef}>


      <div className="left-layout">
        <div className="img-wrap">
          <img src={SpaceImg1} alt="therapy session" />
          <button className='arrow-circle top-arrow'><ArrowUpRight size={18} /></button>
          <div className="all-btn">
            <button className='Heal-btn'><Salad className='heal-icon' /> Heal</button>
            <button className='Renew-btn'><Ribbon className='heal-icon' />Renew</button>
          </div>
        </div>
        <h3>Inside a Therapy Session</h3>
        <p>walkthrough of what to expect in a typical therapy session at Serenity Minds.</p>
      </div>


      <div className="middle-layout">
        <div className="heading-block">
          <h1>Space to Talk.</h1>
          <p>At Serenity Minds, we believe healing begins with feeling heard.</p>
        </div>
        

        <div className="stats-card">
          <div className="top-row">
            <span className="icon-circle"><Lightbulb size={20} /></span>
            <span className="badge">This Year</span>
            <span className="icon-circle"><MoreHorizontal size={16} /></span>
          </div>

          <div className="percent-row">
            <h2>+50%</h2>
          </div>
          <p className="counselors-text">Licensed Counselors</p>
          <p className="desc-text">Mental clarity and emotional peace aren't distant dreams real outcomes.</p>

          <div className="carousel-row">
            <ChevronLeft size={18} />
            <div className="progress-bar"><span></span></div>
            <ChevronRight size={18} />
          </div>
        </div>
      </div>

      <div className="right-layout">
        <button className='arrow-circle top-arrow'><ArrowUpRight size={18} /></button>
        <h3>Expert Care</h3>
        <p>Meet Our Counseling Team at Serenity Minds</p>

        <div className="stat-block">
          <h4>12+</h4>
          <p>Licensed Counselors</p>
        </div>
        <div className="stat-block">
          <h4>50+</h4>
          <p>Years of Combined <br /> Experience</p>
        </div>

        <img className='person-img' src={SpaceImg2} alt="counselor" />
      </div>

    </section>
  )
}

export default Space