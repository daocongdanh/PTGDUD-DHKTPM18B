import { ChefHat } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="subscribe-button">Send</button>
          </div>
        </div>

        <div className="footer-learn-more">
          <h3>Learn More</h3>
          <ul>
            <li>
              <a href="#">Our Cooks</a>
            </li>
            <li>
              <a href="#">See Our Features</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#">Gift Subscription</a>
            </li>
            <li>
              <a href="#">Send Us Feedback</a>
            </li>
          </ul>
        </div>

        <div className="footer-recipes">
          <h3>Recipes</h3>
          <ul>
            <li>
              <a href="#">What to Cook This Week</a>
            </li>
            <li>
              <a href="#">Pasta</a>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
            <li>
              <a href="#">Healthy</a>
            </li>
            <li>
              <a href="#">Vegetarian</a>
            </li>
            <li>
              <a href="#">Vegan</a>
            </li>
            <li>
              <a href="#">Christmas</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <ChefHat className="footer-icon" />
          <span>Chefify</span>
        </div>
        <p>© 2023 Chefify Company</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
