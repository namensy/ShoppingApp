const cartReducer = (state, action) => {
    // กระบวนการจัดการ State ผ่าน action
    if (action.type === "CALCULATE_TOTAL") {
        const { total, amount } = state.products.reduce((cartTotal, item) => {
            const { price, quantity } = item
            const totalprice = price * quantity // ยอดรวมสินค้าแต่ละรายการ
            cartTotal.total += totalprice
            cartTotal.amount += quantity
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })
        return {
            ...state,
            total,
            amount
        }
    }

    if (action.type === 'REMOVE') {
        return {
            ...state,
            products: state.products.filter((item) => item.id !== action.payload)
        }
    }

    if (action.type === 'ADD') {
        const { products } = state;
        // Find the index of the product with the matching ID
        const productIndex = products.findIndex(item => item.id === action.payload);
        if (productIndex !== -1) {
            // Make a copy of the products array to avoid mutating state directly
            const updatedProducts = [...products];

            // Increment the quantity of the specific product
            updatedProducts[productIndex] = {
                ...updatedProducts[productIndex],
                quantity: updatedProducts[productIndex].quantity + 1
            };

            return {
                ...state,
                products: updatedProducts
            };
        }
    }

    if (action.type === 'SUBTRACT') {
        const { products } = state

        let updatedProducts = products.map((item) => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        }).filter((item) => item.quantity !== 0)
        return {
            ...state,
            products: updatedProducts
        }
    }
}

export default cartReducer