import { useState,useEffect } from "react";
import { SWIGGY_RESTURANT_MENU_URL } from "../constant";

const useResturantMenu = (id) => {

    const [resturantMenu, setResturantMenu] = useState(null);

    useEffect(() => {
        getSwiggyMenu();
      }, []);
    
      const getSwiggyMenu = async () => {
        let swiggyMenuApi = await fetch(
          `${SWIGGY_RESTURANT_MENU_URL}${id}`
        );

        let swiggyMenu = await swiggyMenuApi.json();
        // let swiggyMenuData = swiggyMenu.data.cards[0].card.card.info
        setResturantMenu(swiggyMenu);
        console.log(swiggyMenu, "swiggyMenu");
        // console.log(resturantMenu.data.cards[0].card.card.info,'resturantMenu')
      };

      return resturantMenu;

}

export default useResturantMenu;