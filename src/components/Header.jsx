import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" to="/">Home</Link></li>
        <li><Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" to="/register">Register</Link></li>
        <li><Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" to="/login">Login</Link></li>
        <li><Link className="text-white hover:bg-gray-700 px-4 py-2 rounded" to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Header;