import RestuarentCard from "./RestuarentCard";
import { useContext, useEffect, useState } from "react";
import ShimmerHotelCardUI from "./ShimmerHotelCardUI";
import { Link } from "react-router-dom";
import useFilterArray from "../utils/useFilterArray";
import { SWIGGY_ALL_RESTURANT_URL } from "../constant";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
// const express = require("express")
// const app = express()
// const cors = require("cors")
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [filterArray, setFilterArray] = useState([]);

  const {user,setUser} = useContext(UserContext)

  useEffect(() => {
    getSwiggyApi();
  }, []);

  const getSwiggyApi = async () => {
    const swiggyApi = await fetch(SWIGGY_ALL_RESTURANT_URL);
    const swiggyData = await swiggyApi.json();
    let swiggyApiData = swiggyData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(swiggyApiData, "swiggdata");
    setFilterArray(swiggyApiData);
  };

  const isOnline = useOnline();

  if(!isOnline){
    return <h2>Please check your internet connection</h2>
  }

  if (filterArray === undefined) {
    return <h2>All the restaurants are currently unavilable</h2>;
  }

  const serchItemData = (e) => {
    setSearchTxt(e.target.value);
  };

  console.log(filterArray, "filterArray22");

  // let filterArrayData = filterArray.filter((ele) => ele.data.name.toLowerCase().trim().includes(searchTxt.toLowerCase()));

  let filterArrayData = useFilterArray(filterArray, searchTxt);

  const userNameChangeHandler = (e) => {
    setUser({
      name:e.target.value
    })
  }

  return filterArray && filterArray.length === 0 ? (
    <ShimmerHotelCardUI />
  ) : (
    <>
      <div className="search-container p-5 m-2 font-medium bg-pink-50 my-5">
        <input
          type="search"
          className=" focus:bg-green-300 p-2 m-2"
          placeholder="search-hotels"
          onChange={serchItemData}
        />

        <input value={user.name} onChange={userNameChangeHandler}/>
      </div>
      <div className="flex flex-wrap">
        {filterArrayData.length === 0 ? (
          <h2>No Hotel has searched</h2>
        ) : (
          filterArrayData.map((restro) => {
            console.log(restro.info.id,'iddsssss');
            return (
              <Link to={`resturant/${restro.info.id}`} key={restro.info.id}>
                <RestuarentCard {...restro.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
