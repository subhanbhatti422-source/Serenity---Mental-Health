
import "./Hero.css";
import review1 from '../../../../assets/Img/hero-review-img1.png'
import review2 from '../../../../assets/Img/hero-review-img2.png'
import review3 from '../../../../assets/Img/hero-review-img3.png'
import heroImg from '../../../../assets/Img/home.main.png'
import heroChildrenImg from '../../../../assets/Img/home-hero-children.png'
import Btn from "../../../btn/Btn";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function SerenityHero() {

   const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-left", {
        x: -100,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".hero-middle", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".hero-right", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-grid">


        <div className="hero-left">
          <div className="rating-badge">
            <span className="badge-pill">★ 4.7 Rated</span>
            <span className="badge-text">By Satisfied customers</span>
          </div>

          <h1 className="hero-heading">
            You Deserve to <br />  Feel Better. Peace <br /> Begins with Us
          </h1>

          <p className="hero-subtext">
            We offer compassionate and personalized mental
            health support to guide life's challenges.
          </p>

<Btn name='Book an appointment'/>

          <div className="social-proof">
            <div className="avatar-stack">
              <img src={review1} alt="" />
              <img src={review2} alt="" />
              <img src={review3} alt="" />
            </div>
            <p>
              <strong>300+</strong> Individuals who have
              <br />
              trusted Serenity Minds
            </p>
          </div>
        </div>


        <div className="hero-middle">
          <div className="middle-image-wrap">
            <img
              className="middle-image"
              src={heroImg}
              alt="Woman relaxing"
            />
            <span className="tag tag-healthy-mind">
             Healthy Mind
            </span>
            <div className="dots dots-top-right">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="dots dots-bottom-left">
              <span></span><span></span>
              <span></span><span></span>
            </div>

            
          </div>
        </div>
        
        <div className="hero-right">
          <h2 className="hero-right-heading">You Deserve Peace</h2>
          <p className="hero-right-text">
            We offer compassionate, personalized
            mental health support.
          </p>
          <a href="#" className="how-we-work">
            <span className="play-btn">▶</span>
            How we work
          </a>

          <div className="small-image-wrap">
            <img
              className="small-image"
              src={heroChildrenImg}
              alt="Girl smiling outdoors"
            />
            <span className="tag tag-renew">Renew</span>
            <div className="dots dots-top-left">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="dots dots-bottom-right">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}