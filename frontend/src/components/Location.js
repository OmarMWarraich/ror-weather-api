import React, { useState, useEffect } from "react";

const Location = (id) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3001/api/v1/locations/${id}`
      );
      const data = await response.json();
      setLocation(data);
    };

    fetchData();
  }, []);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Location: {location.name}</h1>
      <ul>
        <li>Temperature: {location.current.temp}</li>
        <li>Status: {location.current.status}</li>
      </ul>
    </div>
  );
};

export default Location;
