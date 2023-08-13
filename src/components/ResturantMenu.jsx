import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import ShimmerHotelCardUI from "./ShimmerHotelCardUI";
import useResturantMenu from "../utils/useResturantMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ResturantMenu = () => {
  console.log("inside menu 2");

  const { id } = useParams();

  const resturantMenu = useResturantMenu(id)

  const dispatch = useDispatch();

  const handleAddItem = (ele) => {
    dispatch(addItems(ele))
  }

  // getSwiggyMenu()

  return (!resturantMenu) ? (
    <ShimmerHotelCardUI />
  ) : (
    <>
     <h3 className="text-center"> {`Restaurant id ${id}`}</h3>
      
        {/* {Object.keys(resturantMenu).length > 0 && ( */}
        <div className="flex flex-wrap ">
        {
          resturantMenu.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards.map((ele) => (
            <div className='w-56 p-2 m-2 shadow-lg bg-pink-50' key={ele.card?.info?.id} >
            <h1 className="text-center text-orange-500 p-2 m-2">{ele.card?.info?.name}</h1>
            <img
              src={`${IMG_CDN_URL}${ele.card?.info?.imageId}`}
              className="menu-img"
            />
            <h3 className="text-center">{`price ${ele.card.info.price === undefined ? ele.card.info.defaultPrice/100 : ele.card.info.price/100}`}</h3>
            <h4 className="text-center text-yellow-500">{ele.card?.info?.ratings?.aggregatedRating?.rating === undefined ? 'No' : ele.card?.info?.ratings?.aggregatedRating?.rating} star</h4>
            <div className="flex flex-col items-center justify-center"> {/* Flex container for centering */}
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() =>handleAddItem(ele.card.info)}>
                {`Add ${ele.card.info.price === undefined ? ele.card.info.defaultPrice/100 : ele.card.info.price/100}`}
              </button>
            </div>
            </div>
          ))
        }
        {/* )} */}
        </div>
    </>
  );
};

export default ResturantMenu;
