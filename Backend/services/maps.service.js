const axios = require("axios");
const captainModel = require("../models/captain.model");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.MAPBOX_MAPS_API;
  const encodedAddress = encodeURIComponent(address);
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${apiKey}`;

  try {
    const response = await axios.get(url);
    const features = response.data.features;

    if (features && features.length > 0) {
      const [lng, lat] = features[0].center;
      return {
        lat,
        lng,
      };
    } else {
      throw new Error("No results found from Mapbox.");
    }
  } catch (error) {
    console.error("Mapbox API error:", error.message);
    throw error;
  }
};

const getCoordinates = async (location, apiKey) => {
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${apiKey}&limit=1`;

  const response = await axios.get(geoUrl);
  const features = response.data.features;

  if (features && features.length > 0) {
    return features[0].center; // [longitude, latitude]
  } else {
    throw new Error(`Could not find coordinates for location: ${location}`);
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and Destination are required");
  }

  const apiKey = process.env.MAPBOX_MAPS_API;

  try {
    // Convert input names/addresses into coordinates
    const originCoords = await getCoordinates(origin, apiKey);
    const destinationCoords = await getCoordinates(destination, apiKey);

    const coordsStr = `${originCoords.join(",")};${destinationCoords.join(
      ","
    )}`;
    const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordsStr}?access_token=${apiKey}&geometries=geojson`;

    const response = await axios.get(directionsUrl);

    if (response.data.routes && response.data.routes.length > 0) {
      const route = response.data.routes[0];

      return {
        distance_meters: route.distance,
        duration_seconds: route.duration,
        readable_distance_km: (route.distance / 1000).toFixed(2),
        readable_duration_minutes: (route.duration / 60).toFixed(2),
      };
    } else {
      throw new Error("No routes found");
    }
  } catch (err) {
    console.error("Mapbox error:", err.message);
    throw err;
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const apiKey = process.env.MAPBOX_MAPS_API;

  // Mapbox Geocoding API URL for autocomplete suggestions
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    input
  )}.json?access_token=${apiKey}&limit=5`;

  try {
    const response = await axios.get(url);

    if (response.data && response.data.features) {
      return response.data.features; // This contains the list of autocomplete suggestions
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (error) {
    console.error("Mapbox API error:", error.message);
    throw error;
  }
};

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
  // radius in km

  const captains = await captainModel.find({
    location: {
      $geoWithin: {
        $centerSphere: [[ltd, lng], radius / 6371],
      },
    },
  });

  return captains;
};
