"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import CategoryGrid from "./components/CategoryGrid"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import CookieConsent from "./components/CookieConsent"
import "./App.css"

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <CategoryGrid />
      </main>
      <Footer />
      {showScrollToTop && <ScrollToTop />}
      <CookieConsent />
    </div>
  )
}

export default App
