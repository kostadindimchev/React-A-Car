import Header from "../Header/Header"

const Home = () => {
    return (
      <div className="w-full h-full min-h-screen">
        <div>
          <Header />
        </div>

          <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-slate-500">
          <h1 className="text-4xl font-bold text-black shadow-md">
          Welcome to ReactACar!
          </h1>
          <h2 className="text-2xl text-black mt-10 shadow-md">
          Browse from many cars to rent, or give your own car rented
          </h2>
          </div>
      </div>
    )
}

export default Home;