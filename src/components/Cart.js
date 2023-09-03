import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";


const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearItem())
    }
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-1/2 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg " onClick={handleClearCart}>Clear cart</button>
                {cartItems.length===0 && <h1> Your Cart is empty</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;