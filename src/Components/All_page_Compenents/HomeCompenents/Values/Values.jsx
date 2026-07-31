import './values.css'
import woman1 from '../../../../assets/Img/woman-img-1.png'
const Values = () => {
  return (
    <section className="values-section">
      <span className="values-tag values-tag-1">Compassion</span>
      <span className="values-tag values-tag-2">Connection</span>
      <span className="values-tag values-tag-3">Connection</span>
      <span className="values-tag values-tag-4">Empowerment</span>

      <p className="values-text">
        At Serenity Minds, <span className="values-img"><img src={woman1} alt="" /></span> approach
        is more than professional — it's deeply personal. Our core values
        shape every session.
      </p>
    </section>
  )
}

export default Values