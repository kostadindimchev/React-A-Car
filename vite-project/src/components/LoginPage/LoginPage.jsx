import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center text-center bg-slate-500">
        <div className="bg-slate-300 shadow-md rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
          <div className="login-form flex flex-col space-y-4">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
            >
              Login
            </button>
            <p className="message text-gray-600 text-sm">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-indigo-500 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;