import Footer from "../Footer/Footer";

const Home = () => {
    return (
      <div className="w-full h-screen flex flex-col">
          <div className="flex-grow flex flex-col justify-center items-center text-center bg-slate-500">
          <h1 className="text-4xl font-bold text-black shadow-md">
          Welcome to ReactACar!
          </h1>
          <h2 className="text-2xl text-black mt-10 shadow-md">
          Browse from many cars to rent, or give your own car rented
          </h2>
          </div>
          <Footer />
      </div>
    )
}

export default Home;