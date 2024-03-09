import { useContext } from "react"
import { ShopContext } from "../context"

function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = useContext(S)
    return <div className="cart teal lighten-2 white-text" onClick={handleBasketShow}>
                <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}   
    </div>
}
export {Cart}