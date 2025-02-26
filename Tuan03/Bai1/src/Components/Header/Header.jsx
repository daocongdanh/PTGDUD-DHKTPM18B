import { Search, ChefHat } from "lucide-react";

const menu = [
  {
    label: "What to cook",
    link: "#",
  },
  {
    label: "Recipes",
    link: "#",
  },
  {
    label: "Ingredients",
    link: "#",
  },
  {
    label: "Occasions",
    link: "#",
  },
  {
    label: "About us",
    link: "#",
  },
];
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow">
      <div className="flex items-center space-x-2">
        <div className="bg-pink-500 text-white p-2 rounded-full">
          <ChefHat className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold text-pink-500">Chefify</span>
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
      </div>

      <nav className="hidden md:flex space-x-6 text-gray-700">
        {menu.map((item, index) => (
          <a key={index} href={item.link} className="hover:text-pink-500">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button className="bg-[#e497b3] text-[#de578b] px-4 py-2 rounded-[10px] font-semibold hover:bg-pink-600 ">
          Your Recipe Box
        </button>
        <img
          src="https://png.pngtree.com/png-clipart/20230929/original/pngtree-young-businessman-3d-cartoon-avatar-portrait-png-image_13018279.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
}
