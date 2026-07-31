import './Form.css'

const form = () => {
  return (
        <section className="contact">
      <div className="contact-heading">
        <span className="contact-tag">Contact</span>
        <h1>Send Us a Message</h1>
        <p>
          Reach out anytime, and we'll make sure you're guided with care.
        </p>
      </div>

      <div className="contact-form">
        <form>
          <div className="input-row">
            <div className="input-box">
              <label>First name</label>
              <input type="text" placeholder="First name" />
            </div>

            <div className="input-box">
              <label>Last name</label>
              <input type="text" placeholder="Last name" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-box">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-box">
              <label>Phone number</label>
              <input type="tel" placeholder="Phone number" />
            </div>
          </div>

          <div className="input-box">
            <label>Message</label>
            <textarea
              rows="8"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <button type="submit">Book an appointment</button>
        </form>
      </div>
    </section>

  )
}

export default form
