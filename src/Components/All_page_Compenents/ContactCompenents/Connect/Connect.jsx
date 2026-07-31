
import "./Connect.css";
import icon1 from '../../../../assets/Img/contact-icon1.svg'
import icon2 from '../../../../assets/Img/contact-img2.svg'

const Connect = () => {
  return (
    <>
    
<section className="two-section">
    <div className="Connect-With">
    <div className="img-text">
        <img src={icon1} alt="" />
        <span>Connect With Us</span>
        </div>

        <p>Get wellness tips, event updates, and mental health resources by subscribing to our email list or following us on social media.</p>
        <a href="">hello@serenityminds.com</a>

        </div> 




    <div className="Help">
         <div className="img-text">
        <img src={icon2} alt="" />
        <span>Help & Support</span>
        </div>

        <p>Need assistance with booking, billing, or finding the right therapist? Our support team is here to help you every step of the way. Reach out anytime.</p>
        <a href=""><p>+1 (123) 456-7890</p></a>
        
        </div> 
</section>



    </>
  )
}

export default Connect
