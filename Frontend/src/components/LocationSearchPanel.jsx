import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div className="mt-8">
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem.place_name)}
          className="flex items-center justify-start gap-2 text-sm my-3 border-2 p-2 border-gray-50 rounded-xl active:border-black"
        >
          <h2 className="h-8 w-12 bg-[#eee] rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem.place_name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;