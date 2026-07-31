import { useState } from 'react'
import './Pricing.css'
import Btn from '../../../btn/Btn'

const plans = [
  {
    name: "Starter session",
    desc: "Perfect for those exploring therapy for the first time.",
    monthly: 49,
    yearly: 40,
    features: [
      "Dedicated therapist",
      "Online or in-person",
      "Personalized goal-setting",
      "Access to client portal",
    ],
  },
  {
    name: "Growth session",
    desc: "Perfect for those exploring therapy for the first time.",
    monthly: 89,
    yearly: 70,
    features: [
      "Dedicated therapist",
      "Online or in-person",
      "Personalized goal-setting",
      "Access to client portal",
    ],
  },
  {
    name: "Complete session",
    desc: "Perfect for those exploring therapy for the first time.",
    monthly: 229,
    yearly: 200,
    features: [
      "Dedicated therapist",
      "Online or in-person",
      "Personalized goal-setting",
      "Access to client portal",
    ],
  },
]

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="pricing-section">
      <span className="pricing-badge">Therapy Pricing</span>
      <h2 className="pricing-title">Simple, Transparent Pricing</h2>

      <div className="pricing-toggle">
        <span className={!isYearly ? "pricing-toggle-active" : ""}>Monthly</span>
        <button
          className={`pricing-switch ${isYearly ? "pricing-switch-on" : ""}`}
          onClick={() => setIsYearly(!isYearly)}
        >
          <span className="pricing-switch-dot"></span>
        </button>
        <span className={isYearly ? "pricing-toggle-active" : ""}>Yearly</span>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="pricing-plan-name">{plan.name}</h3>
            <p className="pricing-plan-desc">{plan.desc}</p>

            <div className="pricing-price">
              <span className="pricing-amount">
                ${isYearly ? plan.yearly : plan.monthly}
              </span>
              <span className="pricing-period">
                {isYearly ? "/year" : "/session"}
              </span>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="pricing-check">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

          <Btn name='Book Your Session'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing