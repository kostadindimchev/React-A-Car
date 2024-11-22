import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
      <div className="w-full h-screen flex flex-col">
          <div className="flex-grow flex flex-col justify-center items-center text-center bg-slate-500">
          <h1 className="text-4xl font-bold text-black shadow-md">
          Welcome to ReactACar!
          </h1>
          <h2 className="text-2xl text-black mt-10 shadow-md">
          Browse from many cars to{" "}
          <Link
                to="/cars"
                className="text-indigo-800 hover:underline"
              >
              rent
          </Link>
          , or give your own car{" "}
          <Link
                to="/create"
                className="text-indigo-800 hover:underline"
              >
                rented
              </Link>
          </h2>
          </div>
          <Footer />
      </div>
    )
}

export default Home;