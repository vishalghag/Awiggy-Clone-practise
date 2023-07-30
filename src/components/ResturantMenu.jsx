import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import ShimmerHotelCardUI from "./ShimmerHotelCardUI";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  console.log("inside menu 2");

  const { id } = useParams();

  const resturantMenu = useResturantMenu(id)

  

  // getSwiggyMenu()

  return (!resturantMenu) ? (
    <ShimmerHotelCardUI />
  ) : (
    <>
      <div>
      <div>
        {/* {Object.keys(resturantMenu).length > 0 && ( */}
          <>
            <h1>{resturantMenu?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <h3> {`Restaurant id ${id}`}</h3>
            <img
              src={`${IMG_CDN_URL}${resturantMenu?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}`}
              className="menu-img"
            />
            <h3>{resturantMenu?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            <h4>{resturantMenu?.data?.cards[0]?.card?.card?.info?.avgRatingString} star</h4>
          </>
        {/* )} */}
      </div>
      {/* <div>
        {console.log(Object.values(resturantMenu?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards).map(ele => (
            console.log(ele.card.card.itemCards)
        )))}
      </div> */}
      </div>
    </>
  );
};

export default ResturantMenu;
