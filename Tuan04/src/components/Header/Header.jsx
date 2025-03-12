import { Search, ChefHat } from "lucide-react";
import "./Header.css";
import { Link } from "react-router";

const menu = [
  {
    label: "What to cook",
    link: "/",
  },
  {
    label: "Recipes",
    link: "/",
  },
  {
    label: "Ingredients",
    link: "/",
  },
  {
    label: "Occasions",
    link: "/",
  },
  {
    label: "About us",
    link: "/",
  },
];

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <div className="logo-icon">
            <ChefHat className="icon" />
          </div>
        </a>

        <span className="logo-text">Chefify</span>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <Search className="search-icon" />
      </div>

      <nav className="nav-menu">
        {menu.map((item, index) => (
          <a key={index} href="/" className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="user-actions">
        <button className="recipe-box">Your Recipe Box</button>
        <a href="/">
          <img
            src="https://png.pngtree.com/png-clipart/20230929/original/pngtree-young-businessman-3d-cartoon-avatar-portrait-png-image_13018279.png"
            alt="User Avatar"
            className="user-avatar"
          />
        </a>
      </div>
    </header>
  );
}
