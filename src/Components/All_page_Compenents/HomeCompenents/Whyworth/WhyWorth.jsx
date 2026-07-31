import './WhyWorth.css'
import icon1 from '../../../../assets/Img/icon1.svg'
import icon2 from '../../../../assets/Img/icon3.svg'
import icon3 from '../../../../assets/Img/icon4.svg'

const WhyWorth = () => {
  return (
    <section className="why-section">
      <span className="why-badge">Why It's Worth It</span>
      <h2 className="why-title">What Makes Us Best</h2>

      <div className="why-cards">
        <div className="why-card">
          <div className="why-icon"><img src={icon1} alt="" /></div>
          <h3>You'll Feel Heard and Understood</h3>
          <p>
            Our counselors listen with care, creating a space where you can
            express yourself freely — without judgment or pressure.
          </p>
        </div>

        <div className="why-card why-card-mid">
          <div className="why-icon"><img src={icon2} alt="" /></div>
          <h3>Safe, Non-Judgmental Environment</h3>
          <p>
            From your first session onward, we help you uncover patterns,
            build resilience, and make steady, meaningful progress.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon"><img src={icon3} alt="" /></div>
          <h3>Observe Real Progress with Real Change</h3>
          <p>
            Investing in your mental health isn't a luxury — it's
            self-respect. You deserve the calm, clarity, and confidence
            that comes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyWorth