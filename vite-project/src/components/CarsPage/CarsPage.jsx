import Footer from "../Footer/Footer"
import CarCard from "./CarCard"

const CarsPage = () => {

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center text-center bg-slate-500">
        <div className="bg-slate-300 shadow-md rounded-lg p-8 w-96">
          <h2 className="text-xl text-white bg-slate-800">
            Cars available for rent
          </h2>
          <div>
            <CarCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CarsPage