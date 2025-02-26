import { ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className=" mx-auto grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <h3 className="text-lg font-semibold">About Us</h3>
          <p className="text-gray-400 mt-2">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className=" bg-white p-2 flex-1 rounded-l-md border-none focus:ring-2 focus:ring-pink-400 text-black"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-pink-600">
              Send
            </button>
          </div>
        </div>
        <div className="col-span-1"></div>

        <div className="col-span-1">
          <div>
            <h3 className="text-lg font-semibold">Learn More</h3>
            <ul className="text-gray-400 space-y-2 mt-2">
              <li>
                <a href="#" className="hover:text-white">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-[20px]">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="text-gray-400 space-y-2 mt-2">
              <li>
                <a href="#" className="hover:text-white">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold">Recipes</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li>
              <a href="#" className="hover:text-white">
                What to Cook This Week
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pasta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Dinner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Healthy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vegetarian
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vegan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Christmas
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <ChefHat className="w-6 h-6 text-white" />
          <span className="text-lg font-bold">Chefify</span>
        </div>
        <p className="text-gray-400 text-sm mt-2 md:mt-0">
          © 2023 Chefify Company
        </p>
        <div className="text-gray-400 text-sm flex space-x-4">
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
