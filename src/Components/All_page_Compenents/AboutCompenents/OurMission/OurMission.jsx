
import './OurMission.css'

import aboutImg1 from '../../../../assets/Img/about-img-1.png'
import aboutImg2 from '../../../../assets/Img/about-img-2.png'
import aboutImg3 from '../../../../assets/Img/about-img-3.png'


const OurMission = () => {
  return (
   <>
    
   <section className='Our-Mission'>

    <div className="under-mission">

<div className="mission-1">

<img src={aboutImg1} alt="" />

<div className="mission-card">
    <span>Our Mission</span>
    <p>To make emotional well-being accessible, personalized, and stigma-free.</p>
</div>

</div>


<div className="mission-2">
    <img src={aboutImg2} alt="" />
</div>


<div className="mission-3">

<div className="mission-card-2">
    <span>Our Team</span>
    <p>To make emotional well-being accessible, personalized, and stigma-free.</p>
</div>
<img src={aboutImg3} alt="" />


</div>
</div>
   </section>
   

   <div className="Who-section">
<span>Who We Are</span>
<div className="two-para">
    <p>At Serenity Minds, we believe that mental health is just as important as physical health — and everyone deserves a safe space to heal, grow, and be heard.</p>
    <p>We are a team of compassionate therapists, counselors, and wellness professionals dedicated to guiding individuals through life’s challenges. Whether you're struggling with anxiety, grief, trauma, or just need someone to talk to, we’re here with open hearts and expert care.</p>
</div>

</div>
   </>
  )
}

export default OurMission
