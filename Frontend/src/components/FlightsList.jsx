import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FlightsList.css"; // Import custom CSS

const FlightsList = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/flights")
      .then((response) => {
        setFlights(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error fetching flights");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="flights-container">
      {flights.map((flight) => (
        <div className="flight-card" key={flight.FlightNumber}>
          <h2>{flight.FlightNumber}</h2>
          <p>
            <strong>From:</strong> {flight.DepartureAirport}
          </p>
          <p>
            <strong>To:</strong> {flight.ArrivalAirport}
          </p>
          <p>
            <strong>Departure:</strong> {flight.DepartureTime}
          </p>
          <p>
            <strong>Arrival:</strong> {flight.ArrivalTime}
          </p>
          <p>
            <strong>Status:</strong> {flight.Status}
          </p>
          <p>
            <strong>Airline:</strong> {flight.AirlineCode}
          </p>
          <button className="book-btn">Book</button>
        </div>
      ))}
    </div>
  );
};

export default FlightsList;
