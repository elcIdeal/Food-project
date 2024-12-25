import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"; // Предположительно, это данные с едой
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setcartItems] = useState({})
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
          setcartItems((prev)=>({...prev,[itemId]:1}))
        }else{
          setcartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
        }
    }
    const removeFromCart = (itemId) =>{
      setcartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }
    useEffect(()=>{
      console.log(cartItems)
    },[cartItems])

  const contextValue = {
    food_list: food_list, // Передаем food_list в контекст
    cartItems: cartItems,
    setcartItems: setcartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
