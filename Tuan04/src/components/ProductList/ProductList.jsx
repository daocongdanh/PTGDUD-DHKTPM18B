import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Cucumber salad, cherry tomatoes",
    time: "32 minutes",
    image: "product1.png",
  },
  {
    id: 2,
    name: "Italian-style tomato salad",
    time: "32 minutes",
    image: "product2.png",
  },
  {
    id: 3,
    name: "Potato Salad",
    time: "32 minutes",
    image: "product3.png",
  },
  {
    id: 4,
    name: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: "product4.png",
  },
  {
    id: 5,
    name: "Five-color salad",
    time: "32 minutes",
    image: "product5.png",
  },
  {
    id: 6,
    name: "Corn Salad",
    time: "32 minutes",
    image: "product6.png",
  },
  {
    id: 7,
    name: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: "product7.png",
  },
  {
    id: 8,
    name: "Lotus delight salad",
    time: "32 minutes",
    image: "product8.png",
  },
  {
    id: 9,
    name: "Avocado Salad",
    time: "32 minutes",
    image: "product9.png",
  },
];

const ProductList = ({ showTitle }) => {
  // const [products, setProducts] = useState(null);
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/products/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.data);
  //     });
  // }, []);

  return (
    <div className="product-list-container">
      {showTitle && <h2>Salad (32)</h2>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <span className="product-time">{product.time}</span>
              <Bookmark className="bookmark-icon" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
