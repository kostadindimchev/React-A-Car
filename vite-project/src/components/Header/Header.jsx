import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="absolute top-0 left-0 w-full bg-gray-900 py-4 z-100">
      <div className="px-8">
        <Link to="/" className="text-white text-lg hover:opacity-20 px-4 py-2">
          Home
        </Link>
        <Link to="/cars" className="text-white text-lg hover:opacity-20 px-4 py-2">
          Cars
        </Link>
        <Link to="/login" className="text-white text-lg hover:opacity-20 px-4 py-2">
          Login
        </Link>
        <Link to="/register" className="text-white text-lg hover:opacity-20 px-4 py-2">
          Register
        </Link>
      </div>
    </div>
    )
}

export default Header;