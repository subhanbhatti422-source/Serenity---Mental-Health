import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './question.css'
import Btn from '../../../btn/Btn'
import { ArrowUpRight } from 'lucide-react';
import servicesIcon1 from '../../../../assets/Img/icon1.svg'
import servicesIcon2 from '../../../../assets/Img/icon2.svg'
import servicesIcon3 from '../../../../assets/Img/icon3.svg'
import servicesIcon4 from '../../../../assets/Img/icon4.svg'

gsap.registerPlugin(ScrollTrigger)

const Question = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.from('.span-p-btn > *', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })

   

  }, sectionRef)

  
  const refreshId = requestAnimationFrame(() => {
    ScrollTrigger.refresh()
  })

  return () => {
    cancelAnimationFrame(refreshId)
    ctx.revert()
  }
}, [])

  return (
  <>
  <section className='services-container' ref={sectionRef}>
    <div className="span-p-btn">
        <span>How we help you heal</span>
        <div className="p-btn">
        <p>We offer compassionate and personalized mental health support to guide life’s challenges.</p>
            <Btn name='View All Services'/>
        </div>
    </div>

    <div className='Individual-row service-row'>
        <div className="img-text">
            <img src={servicesIcon1} alt="" />
            <h1>Individual Therapy</h1>
        </div>
        <p>Personalized one-on-one sessions to help you manage anxiety, depression, stress, or life transitions in a safe, judgment-free space.</p>
      <button className='icon'>  <ArrowUpRight/></button>
    </div>
    <div className='Couples-row service-row'>
         <div className="img-text">
            <img src={servicesIcon2} alt="" />
            <h1>Couples Counseling</h1>
        </div>
        <p>Strengthen communication, rebuild trust, and navigate relationship challenges with the help of an experienced counselor.</p>
             <button className='icon'>  <ArrowUpRight/></button>
    </div>

    <div className='Family-row service-row'>
         <div className="img-text">
            <img src={servicesIcon3} alt="" />
            <h1>Family Therapy</h1>
        </div>
        <p>Support for families navigating conflict, change, or emotional struggles — creating healthier, more connected relationships.</p>
             <button className='icon'>  <ArrowUpRight/></button>
    </div>
    <div className='Youth-row service-row'>
         <div className="img-text">
            <img src={servicesIcon4} alt="" />
            <h1>Youth Counseling</h1>
        </div>
        <p>Age-appropriate support for children and teens dealing with school stress, self-esteem issues, or emotional concerns.</p>
             <button className='icon'>  <ArrowUpRight/></button>
    </div>
  </section>
  </>
  )
}

export default Question