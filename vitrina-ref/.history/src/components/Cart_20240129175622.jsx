import { useContext } from "react"
import { ShopContext } from "../context"

function Cart() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext)
    console.log('ORDER LENGTH', order.length);
    const quantity = order.lehgth
    console.log('ORDER', order);

    return
}
export {Cart}