import { useDispatch } from 'react-redux';
import { IMG_CDN_URL } from '../constant';
import { removeItems } from '../utils/cartSlice';
import { useState } from 'react';

const CartItemUI = ({name, imageId,description,price,defaultPrice,id,setDiscountToggle}) => {


   const dispatch = useDispatch()

   const removeItem = (ids) => {
      dispatch(removeItems(ids))
      setDiscountToggle(true)
   }


    return(
       <>
          <div className=' w-56 p-2 rm-2 shadow-lg bg-pink-50'>
             <img src={`${IMG_CDN_URL}${imageId}`} alt='lo'/>
             <h2 className=' font-bold text-xl'>{name}</h2>
             <h3>{description}</h3>
             <h4>{`Rupess ${price === undefined ? defaultPrice/100 : price/100}`}</h4>
             <div className="flex flex-col items-center justify-center">
                <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() => removeItem(id)}>Remove</button>
             </div>
          </div>
       </>
    )
 }

 export default CartItemUI