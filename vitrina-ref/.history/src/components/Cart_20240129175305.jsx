import { useContext } from "react"
import { ShopContext } from "../context"

function Cart() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext)
    console.log('ORDER LENGTH', order.length);
    const quantity = order.lehgth
    console.log('ORDER'order);

    return <div className="cart teal lighten-2 white-text" onClick={handleBasketShow}>
                <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity.lehgth}</span> : null}   
    </div>
}
export {Cart}