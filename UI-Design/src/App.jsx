import React, { useState } from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.imageUrl} alt={hotel.name} />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.rating} ({hotel.reviews})</p>
        <p>{hotel.location}</p>
        <p>{hotel.price}/night</p>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className="map">
      {/* Replace with your actual map implementation */}
      <img src="https://via.placeholder.com/600x400?text=Map" alt="Map" />
    </div>
  );
};

const HotelList = ({ hotels }) => {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

const App = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Spring Hill Suites',
      imageUrl: 'https://via.placeholder.com/200x150?text=Spring+Hill+Suites',
      rating: 4.5,
      reviews: 120,
      location: 'Moab, UT',
      price: 160,
    },
    {
      id: 2,
      name: "Arne's Royal Hawaiian",
      imageUrl: 'https://via.placeholder.com/200x150?text=Arne%27s+Royal+Hawaiian',
      rating: 5,
      reviews: 185,
      location: 'Moab, UT',
      price: 160,
    },
    {
      id: 3,
      name: 'Spring Hill Suites',
      imageUrl: 'https://via.placeholder.com/200x150?text=Spring+Hill+Suites',
      rating: 4.5,
      reviews: 120,
      location: 'Moab, UT',
      price: 160,
    },
    {
      id: 4,
      name: 'Archway Inn',
      imageUrl: 'https://via.placeholder.com/200x150?text=Archway+Inn',
      rating: 4,
      reviews: 121,
      location: 'Moab, UT',
      price: 120,
    },
    {
      id: 5,
      name: 'The Connor Hotel',
      imageUrl: 'https://via.placeholder.com/200x150?text=The+Connor+Hotel',
      rating: 4.5,
      reviews: 205,
      location: 'Moab, UT',
      price: 125,
    },
    {
      id: 6,
      name: 'Phoenician',
      imageUrl: 'https://via.placeholder.com/200x150?text=Phoenician',
      rating: 4,
      reviews: 189,
      location: 'Moab, UT',
      price: 130,
    },
    {
      id: 7,
      name: 'Grand Private',
      imageUrl: 'https://via.placeholder.com/200x150?text=Grand+Private',
      rating: 4,
      reviews: 92,
      location: 'Moab, UT',
      price: 160,
    },
  ]);

  return (
    <div className="app">
      <h1>City of Moab Utah</h1>
      <div className="content">
        <HotelList hotels={hotels} />
        <Map />
      </div>
    </div>
  );
};

export default App;
