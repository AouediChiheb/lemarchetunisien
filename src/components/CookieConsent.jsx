"use client"

import { useState, useEffect } from "react"
import { FaCheck } from "react-icons/fa"
import "./CookieConsent.css"

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent")
    if (!consentGiven) {
      // Small delay to show the banner after page load
      const timer = setTimeout(() => {
        setVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setVisible(false)
  }

  const showMore = () => {
    // This would typically open a modal with more information
    alert("Plus d'informations sur les cookies")
  }

  if (!visible) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>
          En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de Cookies pour vous proposer des
          publicités ciblées adaptées à vos centres d'intérêts et réaliser des statistiques de visites.
        </p>
        <div className="cookie-actions">
          <button className="cookie-more" onClick={showMore}>
            EN SAVOIR PLUS
          </button>
          <button className="cookie-accept" onClick={acceptCookies}>
            ACCEPTER <FaCheck />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
