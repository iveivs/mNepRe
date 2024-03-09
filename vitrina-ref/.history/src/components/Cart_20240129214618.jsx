import { useContext } from "react"
import { ShopContext } from "../context"

function Cart() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext)
    console.log('ORDER LENGTH', order.length);
    const quantity = order.lehgth
    console.log('ORDER', order);

    return (
        <div className="cart teal lighten-2 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {console.log('ORDER 2', order.length)}
            <p>{order.length}</p>
            <span className='cart-quantity'>{order.length ? order.length : null}</span>

</div>
    )
}
export {Cart}