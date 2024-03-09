import { useContext } from "react"
import { ShopContext } from "../context"

function Cart() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext)

    return (
        <div className="cart teal lighten-2 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            <span className='cart-quantity'>{order.length ? order.length : null}</span>

</div>
    )
}
export {Cart}