import { useNavigate } from 'react-router-dom'
import '../components/Hero-section.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="hero-section">
      <div className="inner-s">
        <h1 className="h-h1"><b>Page not found.</b></h1>
        <p className="h-h2"><b>This page is not available yet or has moved.</b></p>
        <button type="button" className="btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </section>
  )
}

export default NotFound