"use client"

import { useState } from "react"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import "./Header.css"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header>
      <div className="top-banner">
        <div className="container">
          <p >LIVRAISON GRATUITE EN FRANCE METROPOLITAINE À PARTIR DE 59,99 €</p>
          <a href="#" className="login-link">
            Connexion
          </a>
        </div>
      </div>

      <div className="main-header container">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Le Marché Tunisien" />
          </a>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Rechercher" className="search-input" />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </div>

        <div className="cart">
          <a href="/cart">
            <FaShoppingCart />
            <span>Votre Panier (0)</span>
          </a>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container">
          <ul>
            <li>
              <a href="#">EPICERIE SUCRÉE</a>
            </li>
            <li>
              <a href="#">EPICERIE SALÉE</a>
            </li>
            <li>
              <a href="#">PATISSERIES TUNISIENNES</a>
            </li>
            <li>
              <a href="#">BOISSONS</a>
            </li>
            <li>
              <a href="#">ARTISANAT TUNISIENNE</a>
            </li>
            <li>
              <a href="#">BONS PLANS</a>
            </li>
          </ul>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#">EPICERIE SUCRÉE</a>
            </li>
            <li>
              <a href="#">EPICERIE SALÉE</a>
            </li>
            <li>
              <a href="#">PATISSERIES TUNISIENNES</a>
            </li>
            <li>
              <a href="#">BOISSONS</a>
            </li>
            <li>
              <a href="#">ARTISANAT TUNISIENNE</a>
            </li>
            <li>
              <a href="#">BONS PLANS</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
