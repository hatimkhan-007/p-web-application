import { useNavigate } from 'react-router-dom'
import './Hero-section.css'

function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="hero-section">
      <div className="inner-s">
        <h1 className="h-h1"><b>In a world full of bold ideas, we turn ambition into meaningful results.</b></h1>
        <p className="h-h2"><b>A company built on innovation, refined through experience, with one clear vision: Build What’s Next.</b></p>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/contact')}>
          Save Time, Lead the World.
        </button>
      </div>
    </section>
  )
}

export default HeroSection