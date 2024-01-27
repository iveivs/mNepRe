import { BasketItem } from "./BasketItem"
function BasketList (props) {
    const {order = [], handleBasketShow = Function.prototype} = props

    const totalPrice = order.redu
    return (
        <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}  />
                )) : <li className="collection-item"> Корзина пуста</li>
            }
        <li className="collection-item active">Общая стоимость:</li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
    )
}
export {BasketList}