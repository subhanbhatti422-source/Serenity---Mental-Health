import './toward.css'
import towardImg from '../../../../assets/Img/towardi-img.avif'
import Btn from "../../../../Components/btn/Btn"
import icon1 from '../../../../assets/Img/icon1.svg'
import icon2 from '../../../../assets/Img/icon5.svg'

const toward = () => {
  return (
   <>
   <section className='toward-section'>
   <div className="left-img">
    <img src={towardImg} alt="" />
   </div>
   <div className="rigth-text">
    <h1>
      Steps toward mental,
      <br />
      emotional peace
    </h1>

    <p className="toward-desc">
      Personalized one-on-one sessions to help you manage anxiety,
      depression, stress, or life transitions in a safe, judgment-free
      space.
    </p>

    <div className="toward-features">
      <div className="feature-box">
        <div className="feature-icon"><img src={icon2} alt="" /></div>
        <h3>Therapy Session</h3>
        <p>A walkthrough of what to expect in a typical therapy session.</p>
      </div>

      <div className="feature-box">
        <div className="feature-icon"><img src={icon1} alt="" /></div>
        <h3>Observe Real Progress</h3>
        <p>
          When you arrive—either in person or virtually—you'll be in a
          safe, supportive environment.
        </p>
      </div>
    </div>

    <Btn name='Book an appointment'/>
   </div>
   </section>
   </>
  )
}

export default toward