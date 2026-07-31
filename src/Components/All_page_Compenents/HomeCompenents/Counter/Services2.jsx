import { useEffect, useRef, useState } from 'react'
import './Services2.css'
import { ArrowUpRight } from 'lucide-react'

const tags = [
  "Therapy",
  "Counseling",
  "Wellness",
  "Support",
  "Coaching",
  "Mindfulness",
  "Crisis Care",
  "Family Therapy",
  "Couples Therapy",
  "Teen Counseling",
]

const stats = [
  { value: 300, suffix: "+", text: "Clients have taken the step toward emotional wellness." },
  { value: 95, suffix: "%", text: "Notice Improvement Within 3 Sessions completed." },
  { value: 12, suffix: "+", text: "Team of professionals brings deep experience." },
  { value: 1000, suffix: "+", text: "Virtual Sessions Delivered ensuring support is always." },
]

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true

            const duration = 1500
            const startTime = performance.now()

            const animate = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              setCount(Math.floor(progress * value))

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(value)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [value])

  return (
    <h3 className="services-stat-number" ref={ref}>
      {count}
      {suffix}
    </h3>
  )
}

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-heading">
        <h2 className="services-title">
          Explore our core services and
          <br />
          discover the right support.
        </h2>
        {/* <span className="services-arrow"></span> */}
      <button className='icon'>  <ArrowUpRight/> </button>

      </div>

      <div className="services-tags">
        {tags.map((tag, index) => (
          <span className="services-tag" key={index}>
            {tag}
          </span>
        ))}
      </div>

      <div className="services-stats">
        {stats.map((item, index) => (
          <div className="services-stat" key={index}>
            <Counter value={item.value} suffix={item.suffix} />
            <p className="services-stat-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services