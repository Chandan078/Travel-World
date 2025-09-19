// import React, { useRef } from "react";
// import "./searchbar.css";
// import { Col, Form, FormGroup } from "reactstrap";
// import axios from "axios";
// import { BASE_URL } from "../utils/config";
// import { useNavigate } from "react-router-dom";

// const SearchBar = () => {
//   const locationRef = useRef("");
//   const distanceRef = useRef(0);
//   const maxGroupSizeRef = useRef(0);
//   const navigate = useNavigate();

//   const searchHandler = async () => {
//     const location = locationRef.current.value;
//     const distance = distanceRef.current.value;
//     const maxGroupSize = maxGroupSizeRef.current.value;
  
//     // Create a search object with the non-empty search parameters
//     const searchParams = new URLSearchParams();
//     if (location) searchParams.append("city", location);
//     if (distance) searchParams.append("distance", distance);
//     if (maxGroupSize) searchParams.append("maxGroupSize", maxGroupSize);
  
//     try {
//       // Make an API call to fetch the search results
//       const response = await axios.get(`${BASE_URL}/search?${searchParams}`);
  
//       navigate(`/search?${searchParams}`, { state: { searchResult: response.data.data } });
//     } catch (error) {
//       alert("Failed to fetch search results: " + error.message);
//     }
//   };

//   return (
//     <Col lg="12">
//       <div className="search__bar">
//         <Form className="d-flex align-items-center gap-4">
//           <FormGroup className="d-flex gap-3 form__group form__group-fast">
//             <span>
//               <i className="ri-map-pin-line" />
//             </span>
//             <div>
//               <h6>Location</h6>
//               <input
//                 type="text"
//                 placeholder="Where are you going?"
//                 ref={locationRef}
//               />
//             </div>
//           </FormGroup>
//           <FormGroup className="d-flex gap-3 form__group form__group-fast">
//             <span>
//               <i className="ri-map-pin-time-line" />
//             </span>
//             <div>
//               <h6>Distance</h6>
//               <input
//                 type="number"
//                 placeholder="Distance k/m"
//                 ref={distanceRef}
//               />
//             </div>
//           </FormGroup>
//           <FormGroup className="d-flex gap-3 form__group form__group-fast">
//             <span>
//               <i className="ri-group-line" />
//             </span>
//             <div>
//               <h6>Max People</h6>
//               <input type="number" placeholder="0" ref={maxGroupSizeRef} />
//             </div>
//           </FormGroup>

//           <span className="search__icon" type="submit" onClick={searchHandler}>
//             <i className="ri-search-line" />
//           </span>
//         </Form>
//       </div>
//     </Col>
//   );
// };

// export default SearchBar;

import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = () => {
    // State to manage search form inputs
    const [location, setLocation] = useState('');
    const [goingDate, setGoingDate] = useState('');
    const [returningDate, setReturningDate] = useState('');
    const [people, setPeople] = useState('');
    const [travelMode, setTravelMode] = useState('flight');

    const searchHandler = (e) => {
        e.preventDefault();

        // Basic validation
        if (!location.trim()) {
            alert('Please enter a location to search.');
            return;
        }

        // Create the search query string
        const searchQuery = `
            Location: ${location}, 
            Going Date: ${goingDate}, 
            Returning Date: ${returningDate}, 
            Number of People: ${people}, 
            Travel Mode: ${travelMode}
        `;

        // Simulate an API call
        console.log("Simulating API call with query:", searchQuery);
        alert("Simulating API call with query:", searchQuery);
    };

    return (
        <div className="search-bar-container">
            <form className="search-form" onSubmit={searchHandler}>
                <div className="search-input-group">
                    <span className="search-icon">
                        <i className="ri-map-pin-line"></i>
                    </span>
                    <div className="search-input">
                        <label>Location</label>
                        <input 
                            type="text" 
                            placeholder="Where are you going?"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>

                <div className="search-input-group date-input-group">
                    <span className="search-icon">
                        <i className="ri-calendar-line"></i>
                    </span>
                    <div className="search-input">
                        <label>From - To</label>
                        <div className="date-inputs">
                            <input 
                                type="date"
                                value={goingDate}
                                onChange={(e) => setGoingDate(e.target.value)}
                                aria-label="Going date"
                            />
                            <span>-</span>
                            <input
                                type="date"
                                value={returningDate}
                                onChange={(e) => setReturningDate(e.target.value)}
                                aria-label="Returning date"
                            />
                        </div>
                    </div>
                </div>

                <div className="search-input-group">
                    <span className="search-icon">
                        <i className="ri-group-line"></i>
                    </span>
                    <div className="search-input">
                        <label>Number of People</label>
                        <input 
                            type="number" 
                            placeholder="0" 
                            min="1"
                            value={people}
                            onChange={(e) => setPeople(e.target.value)}
                        />
                    </div>
                </div>

                <div className="search-input-group">
                    <span className="search-icon">
                        <i className="ri-car-line"></i>
                    </span>
                    <div className="search-input">
                        <label>Travel Mode</label>
                        <select
                            value={travelMode}
                            onChange={(e) => setTravelMode(e.target.value)}
                        >
                            <option value="flight">Flight</option>
                            <option value="train">Train</option>
                            <option value="car">Car</option>
                            <option value="bus">Bus</option>
                        </select>
                    </div>
                </div>

                <button className="search-button" type="submit">
                    <i className="ri-search-line"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;