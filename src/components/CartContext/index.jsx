import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    console.log(cartList)
    
    const isInCart =(product) => { return cartList.find(item=> item.id === product.id)};

    const addItem = (product, count) => {
        const producto = isInCart(product);
        if (producto) {
            producto.count += count;
            const cartFiltrado = cartList.filter(item=> item.id!==producto.id);
            cartFiltrado.push(producto);
            setCartList(cartFiltrado);
        }else{
            setCartList([...cartList, {...product, count}]); 
        }
        console.log(cartList)
    }
    const clear = () => { setCartList([]);};

    const removeItem =(id) => { setCartList(cartList.filter(item => item.id !==id)) };

    const totalPrice = () => {
    
    }
    return (
        <CartContext.Provider value={
            {cartList, 
            addItem, 
            clear,
            removeItem,
            totalPrice
            }
        }>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;