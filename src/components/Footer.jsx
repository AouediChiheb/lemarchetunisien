import { FaTruck, FaCreditCard, FaHeadset, FaStar, FaStarHalf } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="services-banner">
        <div className="container">
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <FaTruck />
              </div>
              <div className="service-text">Livraison en 24/48h</div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FaCreditCard />
              </div>
              <div className="service-text">Paiement sécurisé</div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <FaHeadset />
              </div>
              <div className="service-text">Service client réactif</div>
            </div>

            <div className="service-item">
              <div className="service-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <div className="service-text">Avis client 4,8/5</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column company-info">
              <div className="footer-logo">
                <img src="/logo.png" alt="Le Marché Tunisien" />
              </div>
              <p>14, rue Rémy Cachet 69120 Vaulx en</p>
              <p>Velin - Lyon - France</p>
              <p>Appelez-nous : +33 9 80 80 56 50</p>
              <p>Envoyez-nous un e-mail:</p>
              <p>contact@lemarchetunisien.com</p>
            </div>

            <div className="footer-column">
              <h4>NOS PRODUITS</h4>
              <ul>
                <li>
                  <a href="#">Promotions</a>
                </li>
                <li>
                  <a href="#">Nouveaux produits</a>
                </li>
                <li>
                  <a href="#">Meilleures ventes</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>INFORMATIONS</h4>
              <ul>
                <li>
                  <a href="#">Qui sommes nous ?</a>
                </li>
                <li>
                  <a href="#">Politique de confidentialités</a>
                </li>
                <li>
                  <a href="#">Conditions générales de vente</a>
                </li>
                <li>
                  <a href="#">Mentions légales</a>
                </li>
                <li>
                  <a href="#">Paiement et livraison</a>
                </li>
                <li>
                  <a href="#">Contactez-nous</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>VOTRE COMPTE</h4>
              <ul>
                <li>
                  <a href="#">Informations personnelles</a>
                </li>
                <li>
                  <a href="#">Commandes</a>
                </li>
                <li>
                  <a href="#">Avoirs</a>
                </li>
                <li>
                  <a href="#">Adresses</a>
                </li>
                <li>
                  <a href="#">Bons de réduction</a>
                </li>
                <li>
                  <a href="#">Mes alertes</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>Copyright © 2022. Tous les droits sont réservés par lemarchetunisien.com</p>
          </div>
          <div className="payment-methods">
            <img src="/payment-paypal.png" alt="PayPal" />
            <img src="/payment-mastercard.png" alt="MasterCard" />
            <img src="/payment-visa.png" alt="Visa" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
