import React, { useState, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentStep, setCurrentStep] = useState('welcome') // 'welcome' | 'ad' | 'main'
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openModal = () => {
    console.log("Opening Modal...");
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log("Closing Modal...");
    setIsModalOpen(false)
  }

  const handleNextStep = (next) => {
    setIsExiting(true)
    setTimeout(() => {
      setCurrentStep(next)
      setIsExiting(false)
    }, 800)
  }

  if (currentStep === 'welcome') {
    return (
      <div className={`welcome-page ${isExiting ? 'fade-exit' : ''}`} dir="rtl">
        <div className="welcome-content">
          <h1 className="welcome-title">رهط 4 <span className="text-gradient">Camino</span> يرحب بيكم في موقعنا</h1>
          <p className="welcome-subtitle">لو عايز تعرف احنا عاملين اى اضغط هنا</p>
          <button className="cta-button" onClick={() => handleNextStep('ad')}>
            اضغط هنا
            <span style={{ fontSize: '1.2em' }}>✨</span>
          </button>
        </div>
      </div>
    )
  }

  if (currentStep === 'ad') {
    return (
      <div className={`ad-page ${isExiting ? 'fade-exit' : ''}`} dir="rtl">
        <div className="ad-container-content">
          <h1 className="welcome-title">الأعلان</h1>
          <div className="video-player-container">
            <video 
              controls 
              autoPlay 
              className="ad-video"
              src="/final.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="cta-button" style={{ marginTop: '40px' }} onClick={() => handleNextStep('main')}>
            التالي
            <span style={{ fontSize: '1.2em' }}>➡️</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="container">
        <div className="logo-container">
          <img src="/logo.png" alt="Camino Logo" className="main-logo" />
          <img src="/camp_logo.jpg" alt="Camp Logo" className="camp-logo" />
        </div>
        
        <div 
          className="hero-text"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - (scrollY / 500)
          }}
        >
          <div className="scout-group-name">مجموعة جنود المسيح الكشفية</div>
          <h1 className="main-title">مخيم القادة والجوالة <span className="text-gradient">٢٠٢٦</span></h1>
          <h2 className="sub-title">⚜️ The Road ⚜️</h2>
        </div>

        <div className="scroll-indicator">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </header>

      <main className="container">
        {/* Ad Section */}
        <section className="ad-section">
          <h2 className="section-title">شعار <span className="text-gradient">المخيم</span></h2>
          <div className="video-container-placeholder">
            <button onClick={openModal} className="watch-btn">
              <span className="icon">▶</span> شاهد شعار المخيم
            </button>
          </div>
        </section>

        {/* Chants Section */}
        <section className="chants-section">
          <h2 className="section-title">صيحات <span className="text-gradient">الطريق</span></h2>
          
          <div className="chants-grid">
            <ChantCard 
              title="كامينو" 
              text="كامينو كامينو والي\nجاي الله يعينو" 
              delay="0.1s" 
            />
            <ChantCard 
              title="الكلبش" 
              text="كامينو يا بلاش \nوالكلبش ميلزمناش" 
              delay="0.2s" 
            />
            <ChantCard 
              title="السمر" 
              text="كامينو كامينو ودا زفلط عارفينو\n والسمر فايزينو" 
              delay="0.3s" 
            />
            <div className="chant-card add-card" style={{ animationDelay: '0.4s' }}>
              <div className="add-icon">+</div>
              <p className="add-text">إضافة صيحة جديدة</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© ٢٠٢٦ مجموعة جنود المسيح الكشفية - جميع الحقوق محفوظة</p>
      </footer>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="iframe-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/51sG0DDjd1Y?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="modal-video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ChantCard({ title, text, delay }) {
  return (
    <div className="chant-card" style={{ animationDelay: delay }}>
      <h3 className="chant-title">{title}</h3>
      <p className="chant-text text-xl">
        {text.split('\\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}

export default App
