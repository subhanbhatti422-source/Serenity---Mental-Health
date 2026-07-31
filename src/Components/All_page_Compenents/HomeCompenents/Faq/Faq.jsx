import { useState, useRef } from 'react'
import './Faq.css'

const faqs = [
  {
    question: "1. What types of therapy do you offer?",
    answer:
      "Yes, we offer a free 14-day trial so you can explore SalesFlow's features before committing to a paid plan and see how it works for their business.",
  },
  {
    question: "2. Are sessions confidential?",
    answer:
      "Yes, every session is completely confidential and protected under strict privacy guidelines between you and your therapist.",
  },
  {
    question: "3. Do I need a referral to book a session?",
    answer:
      "No referral is needed. You can book a session directly through our website whenever you're ready.",
  },
  {
    question: "4. What if I'm not sure I need therapy?",
    answer:
      "That's completely okay. You can book an initial consultation and our team will help you figure out the right next step.",
  },
]

const FaqItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null)

  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{item.question}</span>
        <span className="faq-icon">{isOpen ? "︿" : "﹀"}</span>
      </button>

      <div
        className="faq-answer-wrap"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  )
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-left">
        <span className="faq-badge">Common Questions</span>
        <h2 className="faq-title">Your Questions Answered</h2>
        <p className="faq-subtitle">
          Everything You Need to Know Before
          <br />
          Starting Your Journey
        </p>
      </div>

      <div className="faq-right">
        {faqs.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Faq