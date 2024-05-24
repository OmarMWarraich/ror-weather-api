import React, { useState, useEffect } from "react";
import Location from "./Location";

const Locations = () => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/v1/locations", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setLocations(data);
    };

    fetchData();
  }, []);

  if (!locations) {
    return <div>Loading...</div>;
  }

  return (
    <div className="locations">
      <h1>Locations</h1>
      <div>
        {locations.map((location) => (
          <div key={location.id}>
            <h2>{location.name}</h2>
            <p>Temperature: {location.current.temp}</p>
            <p>Status: {location.current.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
