import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider  =({children})=>{
    const currency = import.meta.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin,setShowUserLogin] = useState(false);
    const [products,setProducts] = useState([]);
    const [carItems,setCartItems] = useState({});
    const [searchQuery,setSearchQuery] = useState({});

    // fetch all products 
    const fetchProducts = async ()=>{
        setProducts(dummyProducts);
    }

    // Add product to cart
    const addToCart = (itemId)=>{
        let cartData = structuredClone(carItems);
        if(cartData[itemId]){
            cartData[itemId]+=1;
        }else{
            cartData[itemId]=1;
        }
        setCartItems(cartData);
        toast.success("Added To cart")
    }

    // update cart Item quantity 

    const updateCartItem = (itemId,quantity)=>{
        let cartData = structuredClone(carItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("cart Updated");
    }

    // remove product from cart 
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(carItems);
        if(cartData[itemId]){
            cartData[itemId] -=1;
            if(cartData[itemId]===0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed From Cart");
        setCartItems(cartData);
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    const value={user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin,navigate,products,currency,addToCart, updateCartItem, removeFromCart,carItems, searchQuery,setSearchQuery};

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppcontext = ()=>{
    return useContext(AppContext);
}