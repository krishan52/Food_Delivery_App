import React, { useState, useEffect } from 'react';

const SwiggyDataFetcher = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // Function to fetch data using both GET and POST requests
  const fetchData = async () => {
    try {
      // GET request to fetch restaurant data
      const getData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const getJson = await getData.json();

      const restaurants = getJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // POST request to fetch additional data (modify body and URL as required)
      const postData = await fetch('https://www.swiggy.com/dapi/restaurants/list/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Add appropriate data for the POST request here
          lat: 28.7040592,
          lng: 77.10249019999999,
        }),
      });

      const postJson = await postData.json();

      // Assuming the POST data has additional information you want to merge
      const updatedRestaurants = restaurants.map((restaurant, index) => {
        return {
          ...restaurant,
          additionalInfo: postJson?.data?.[index] || {}, // Add any additional data from POST response
        };
      });

      // Update state with the merged restaurant data
      setListOfRestaurants(updatedRestaurants);
      setFilteredRestaurant(updatedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty array means it runs once when the component mounts

  return (
    <div>
      <h1>Swiggy Restaurant Data</h1>
      <pre>{JSON.stringify(listOfRestaurants, null, 2)}</pre> {/* Display merged data */}
    </div>
  );
};

export default SwiggyDataFetcher;
