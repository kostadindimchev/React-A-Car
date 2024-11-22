import Footer from "../Footer/Footer"

const Create = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-grow flex flex-col justify-center items-center text-center bg-slate-500">
            <div className="bg-slate-300 shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold mb-4 text-black">Add Car</h2>
                    <div className="login-form flex flex-col space-y-4">
                        <input
                            type="text"
                            name="make"
                            id="make"
                            placeholder="Make"
                        />

                        <input
                            type="text"
                            name="model"
                            id="car-model"
                            placeholder="Model"
                        />

                        <input
                            type="text"
                            name="imageUrl"
                            id="car-image"
                            placeholder="Car Image URL"
                        />

                        <textarea
                            id="event-description"
                            name="description"
                            placeholder="Description"
                            rows="5"
                            cols="50"
                        ></textarea>

                        <input
                            type="text"
                            name="year"
                            id="year"
                            placeholder="year"
                        />

                        <button type="submit" className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200">Add</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Create