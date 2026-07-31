
import './Serenity.css'

const Serenity = ({btn,h1,p}) => {
  return (
    <>
    <section className='About'>
        <div className="about-content">
            <div className="about-btn">
    <button>{btn}</button>
    </div>
    <span>{h1}</span>
    <p>{p}</p>
    </div>
    </section>
    </>
  )
}

export default Serenity
