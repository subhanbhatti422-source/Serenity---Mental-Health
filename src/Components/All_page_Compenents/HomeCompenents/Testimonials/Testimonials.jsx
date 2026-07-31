import './Testimonials.css'
import pin1 from '../../../../assets/Img/pin1.svg'
import pin2 from '../../../../assets/Img/pin2.svg'
import pin3 from '../../../../assets/Img/pin3.svg'
import pin4 from '../../../../assets/Img/pin4.svg'

import avatar1 from '../../../../assets/Img/hero-review-img1.png'


const testimonials = [
  {
    name: "Emily Carson",
    avatar: avatar1,
    text: "\"Therapy changed my life. After years of hiding my anxiety, I finally opened up — and I'm so grateful I did. My counselor was incredibly kind and supportive.\"",
    pin: pin1,
  },
  {
    name: "Marcus Lane",
    avatar: avatar1,
    text: "\"The online sessions made it so easy to get help without stepping out of my comfort zone. I felt just as connected and cared for.\"",
    pin: pin2,
  },
  {
    name: "Hannah Mitchell",
    avatar: avatar1,
    text: "\"After losing my father, I struggled deeply. My grief therapist helped me find space for the pain, without letting it define me.\"",
    pin: pin3,
  },
  {
    name: "Daniel Rivera",
    avatar: avatar1,
    text: "\"I was going through a very difficult breakup, and counseling gave me the tools to heal. I felt safe, heard, and respected from day one.\"",
    pin: pin4,
  },
]

const Testimonials = () => {
  const cards = [...testimonials, ...testimonials]

  return (
    <section className="testimonial-section">
      <span className="testimonial-badge">Client Testimonials</span>
      <h2 className="testimonial-title">
        You're Not Alone,
        <br />
        Hear From Others Like You
      </h2>

      <div className="testimonial-track-wrap">
        <div className="testimonial-track">
          {cards.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <span className='testimonial-pin'><img src={`${item.pin}`}  alt="" /></span>
              <div className="testimonial-header">
                <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                <span className="testimonial-name">{item.name}</span>
              </div>
              <p className="testimonial-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials