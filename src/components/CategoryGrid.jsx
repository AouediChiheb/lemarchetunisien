import React from "react";
import "./CategoryGrid.css";

const categories = [
  {
    id: 1,
    name: "EPICERIE SUCRÉE",
    image: "/epicerie-sucree.png",
  },
  {
    id: 2,
    name: "EPICERIE SALÉE",
    image: "/epicerie-salee.png",
  },
  {
    id: 3,
    name: "PATISSERIES TUNISIENNES",
    image: "/patisseries.png",
  },
  {
    id: 4,
    name: "BOISSONS",
    image: "/boissons.png",
  },
  {
    id: 5,
    name: "ARTISANAT TUNISIENNE",
    image: "/artisanat.png",
  },
  {
    id: 6,
    name: "BONS PLANS",
    image: "/bons-plans.png",
  },
];

// Produits par catégorie
const productCategories = [
  {
    id: 1,
    title: "Nos Boîtes, shorba & chemla",
    products: [
      {
        id: 1,
        name: "Chorba - harira pimentée 350 gr",
        price: 2.99,
        oldPrice: 4.50,
        image: "/chorba-harira-pimentee.jpg",
      },
      {
        id: 2,
        name: "Chorba - harira pistaches 350 gr",
        price: 2.92,
        oldPrice: 4.50,
        image: "/chorba-harira-pistaches.jpg",
      },
      {
        id: 3,
        name: "Chorba - harira fruits rouges 350 gr",
        price: 2.92,
        oldPrice: 4.50,
        image: "/chorba-harira-fruits-rouges.jpg",
      },
      {
        id: 4,
        name: "Chorba - harira vanillée 350 gr",
        price: 2.53,
        oldPrice: 4.00,
        image: "/chorba-harira-vanillee.jpg",
      },
      {
        id: 5,
        name: "Droo - Sorgho Tunisien 500 gr",
        price: 6.00,
        image: "/droo-sorgho.jpg",
      },
      {
        id: 6,
        name: "Boites thé 500 gr (BOGA)",
        price: 3.49,
        image: "/boite-the-boga.jpg",
      },
      {
        id: 7,
        name: "Boites Friandises 500 gr (BOGA)",
        price: 3.49,
        image: "/boite-friandises-boga.jpg",
      },
      {
        id: 8,
        name: "Zgougu 500 gr (Cacao)",
        price: 17.49,
        image: "/zgougu-cacao.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Arômes de Tunisie",
    products: [
      {
        id: 9,
        name: "Mélange d'herbes Kerkennah (Jardins de Carthage)",
        price: 4.99,
        image: "/melange-herbes-kerkennah.jpg",
      },
      {
        id: 10,
        name: "Henné Naturel 100gr (Jardins de Carthage)",
        price: 3.49,
        image: "/henne-naturel.jpg",
      },
      {
        id: 11,
        name: "Oliban Ras (Jardins de Carthage)",
        price: 2.99,
        image: "/oliban-ras.jpg",
      },
      {
        id: 12,
        name: "Écorce de noyer 3mm 50gr",
        price: 1.99,
        image: "/ecorce-noyer.jpg",
      },
      {
        id: 13,
        name: "Savon à l'huile d'olive - grenade",
        price: 2.99,
        image: "/savon-huile-olive-grenade.jpg",
      },
      {
        id: 14,
        name: "Savon à l'huile d'olive - verveine",
        price: 2.99,
        image: "/savon-huile-olive-verveine.jpg",
      },
      {
        id: 15,
        name: "Savon corporel naturel grenade",
        price: 5.49,
        image: "/savon-corporel-grenade.jpg",
      },
      {
        id: 16,
        name: "Savon corporel naturel rose",
        price: 5.49,
        image: "/savon-corporel-rose.jpg",
      },
    ],
  },
];

const CategoryGrid = () => {
  return (
    <section className="category-grid">
      <div className="container">
        <h2 className="section-title">Nos Catégories</h2>
        <div className="grid">
          {categories.map((category) => (
            <a href="#" className="category-card" key={category.id}>
              <img src={category.image || "/placeholder.svg"} alt={category.name} />
              <h3>{category.name}</h3>
            </a>
          ))}
        </div>

        {/* Sections de produits par catégorie */}
        {productCategories.map((category) => (
          <div key={category.id} className="product-category-section">
            <h2 className="product-category-title">{category.title}</h2>
            <div className="products-grid">
              {category.products.map((product) => (
                <div key={product.id} className="product-item">
                  <div className="product-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price">
                      <span className="current-price">{product.price.toFixed(2)} €</span>
                      {product.oldPrice && <span className="old-price">{product.oldPrice.toFixed(2)} €</span>}
                    </div>
                    <button className="add-to-cart-btn">Ajouter au panier</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;