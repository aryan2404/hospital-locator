import React, { useState, useEffect } from "react";
import Login from "./components/Login";
// import Map from "./components/Map";

export default function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error fetching location: ", error)
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <h2>Welcome, {user.displayName}</h2>
          {location && <p>Latitude: {location.lat}, Longitude: {location.lng}</p>}
        </>
      )}
    </div>
  );
}
