"use client"
import { FaArrowUp } from "react-icons/fa"
import "./ScrollToTop.css"

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTop
