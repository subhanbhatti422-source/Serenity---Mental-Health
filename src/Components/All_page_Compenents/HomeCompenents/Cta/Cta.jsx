import './Cta.css'
import ctaBg from '../../../../assets/Img/cta.png'

const Cta = () => {
  return (
    <section className="cta-section" style={{ backgroundImage: `url(${ctaBg})` }}>
      <div className="cta-dots cta-dots-top">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cta-dots cta-dots-bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="cta-content">
        <div className="cta-logo">
          <span className="cta-logo-icon">❁</span>
          <span>Serenity Minds</span>
        </div>

        <h2 className="cta-title">
          Your journey to healing begins with one
          <br />
          small step — reaching out.
        </h2>

        <button className="cta-btn">Book an appointment</button>
      </div>
    </section>
  )
}

export default Cta