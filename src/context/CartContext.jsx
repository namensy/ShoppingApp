import { createContext, useContext, useEffect, useReducer } from "react";
import products from '../data/products'
import cartReducer from "../reducer/cartReducer";
// การสร้าง Context
const CartContext = createContext()
const initState = {
    products: products,
    total: 0,
    amount: 0
}

// ทำไมต้องมี {} ตรง { Children }
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initState)
    function formatMoney(money){
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    function removeItem(id) {
        dispatch({ type: 'REMOVE', payload:id })
    }
    function addQuantity(id) {
        dispatch({ type: 'ADD', payload:id })
    }
    function subTractQuantity(id) {
        dispatch({ type: 'SUBTRACT', payload:id })
    }

    useEffect(() => {
        dispatch({ type: "CALCULATE_TOTAL" })
    }, [state.products])

    return (
        <CartContext.Provider value={{ ...state, formatMoney, removeItem, addQuantity, subTractQuantity}}>
            {children}
        </CartContext.Provider>
    )
}


// การนำเอา Context ไปใช้งงานด้านนอก
export const useCart = () => {
    return useContext(CartContext)
}