import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md rounded-sm">
      <div className="flex justify-between item-center max-w-6xl mx-auto p-6">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-950">ADplus</span>
            <span className="text-blue-400">Homes</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-2 flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:text-blue-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:text-blue-500">
              About
            </li>
          </Link>
          <Link to="sign-in">
            <li className="text-slate-700 hover:text-blue-500">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
