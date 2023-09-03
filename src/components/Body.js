import RestaurantCard, { withPromtedLabel } from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterdList = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filterdList);
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const getOnlineStaus = useOnlineStatus();
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  if (getOnlineStaus === false)
    return (
      <h1>
        Looks like you are offline !! Please check your internet connection
      </h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex m-4">
        <div className="search m-2 p-2">
          <input
            type="text"
            data-testid="SearchInput"
            className="border border-solid border-black rounded-sm w-60"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" px-4 bg-green-100 m-3 py-1 rounded-lg hover:bg-green-300"
            onClick={() => {
              const filterdList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterdList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-2 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-400"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-2 p-2 flex items-center">
          <label>User Name : </label>
          <input
            className="border border-black m-1 p-1 h-6"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
