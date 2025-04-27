"use client"
import { useState, useEffect } from "react"
import "./Banner.css"

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const banners = [
    { 
      id: 1, 
      img: "/banner1.jpg", 
      alt: "Tunisian Products",
    },
    { 
      id: 2, 
      img: "/banner2.jpg", 
      alt: "Special Offer",

    },
    { 
      id: 3, 
      img: "/banner3.jpg", 
      alt: "New Collection",

    },
    { 
      id: 4, 
      img: "/banner4.jpg", 
      alt: "Seasonal Sale",

    },
    { 
      id: 5, 
      img: "/banner5.jpg", 
      alt: "Artisanat",

    }
  ]

  const totalSlides = banners.length

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides)
  }

  return (
    <div className="full-bleed-banner">
      <div className="banner-container">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`banner-slide ${activeSlide === index ? "active" : ""}`}
          >
            <img src={banner.img} alt={banner.alt} className="banner-image" />
            <div className="banner-text">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}

        <button className="nav-arrow prev" onClick={goToPrev}>
          <span>❮</span>
        </button>
        <button className="nav-arrow next" onClick={goToNext}>
          <span>❯</span>
        </button>

        <div className="dots-container">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner