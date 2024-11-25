import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if(
      currentLocation.toLowerCase() === "mirpur-2" && destinationLocation.toLowerCase() === "mirpur-10"
    ) {
      setShowData(true);
      setErrorMessage("");
    } else {
      setShowData(false);
      setErrorMessage("No data available for the provided locations. please try again");
    }
  };

  return (
    <div className="m-1 p-1 flex items-center justify-center h-screen">
      {/* Main container */}
      <div className="flex flex-col bg-[#d6daa09f] p-8 rounded-lg shadow-md w-full max-w-[900px]">
        {/* Form */}
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Current Location Input */}
          <div className="flex flex-col text-center">
            <label
              htmlFor="current-location"
              className="text-lg font-mono font-bold mb-2"
            >
              Current Location
            </label>
            <input
              id="current-location"
              placeholder="Your current location"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              className="h-12 bg-[#252627] text-center text-lg font-mono outline-none border-none rounded-lg text-[beige] placeholder:text-[beige] focus:outline-none focus:border-b-2 focus:border-lime-300 p-4"
              required
            />
          </div>

          {/* Destination Location Input */}
          <div className="flex flex-col text-center">
            <label
              htmlFor="destination-location"
              className="text-lg font-mono font-bold mb-2"
            >
              Destination Location
            </label>
            <input
              id="destination-location"
              placeholder="Your destination location"
              value={destinationLocation}
              onChange={(e) => setDestinationLocation(e.target.value)}
              className="h-12 bg-[#252627] text-center text-lg font-mono outline-none border-none rounded-lg text-[beige] placeholder:text-[beige] focus:outline-none focus:border-b-2 focus:border-lime-300 p-4"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white font-mono text-lg py-2 px-6 rounded-lg hover:bg-lime-500 transition duration-300"
          >
            Find Path
          </button>
        </form>

        { errorMessage && (
          <div className="mt-4 text-red-500 font-bold text-center">{errorMessage}</div>
        )
        }

        {/* Data Display */}
        {showData && (
          <div className="mt-6 text-center bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold">Travel Details</h2>
            <div className="mt-4 text-left space-y-4">
              <div>
                <h3 className="font-bold">Bus:</h3>
                <p>Location: Rainkhola Bazar</p>
                <p>Bus Name: Projapoti</p>
              </div>
              <div>
                <h3 className="font-bold">Leguna:</h3>
                <p>Location: Rainkhola Bazar</p>
                <p>Laguna Name: Projapoti</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
