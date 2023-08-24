import { useDispatch, useSelector } from "react-redux";
import CartItemUI from "./CartItemUI";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const [sum, setSum] = useState(0)
    const [discountToggle,setDiscountToggle] = useState(true)

    useEffect(() => {
        let totalPrice = 0
        cartItems.map((itemPrices) => {
            if(itemPrices.price){
                totalPrice+=(itemPrices.price/100)
            }else{
                totalPrice+=(itemPrices.defaultPrice/100)
            }
        })
        setSum(totalPrice)
    },[cartItems])
        

    const dispatch = useDispatch()

    const clearCartItems1 = () => {
        dispatch(clearCart())
    }

    const discountCupon = () => {
        if(sum === 0){
            setDiscountToggle(true)
        }else{
        setDiscountToggle(false)
       return  setSum(sum * 40/100)
        }
    }

   

    return (
        <>
            <div className="flex justify-between m-3 p-3">
            <h1 className=" font-bold text-center">No of Cart Items :- {cartItems.length}</h1>
            <button className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" onClick={() => clearCartItems1()}>Clear Cart</button>
             {discountToggle ? <button className=" py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700" onClick={discountCupon}>New User 40%</button> : <button className=" py-2 px-4 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"  disabled>Already Used</button>}   
            <h2 className=" text-center font-bold text-lg">Total Bill:-{sum.toFixed(2)} </h2>
            </div>
            <div className=" flex">
                {cartItems.map(items => <CartItemUI key={items.id} {...items} setDiscountToggle={setDiscountToggle} />)}
            </div>
        </>
    )
}

export default Cart;