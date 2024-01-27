import { BasketItem } from "./BasketItem"
function BasketList (props) {
    const {order = [], handleBasketShow = Function.prototype} = props
    return (
        <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}  />
                )) : <li className="collection-item"> Корзина пуста</li>
            }
        <li className="collection-item active">Общая стоимость:</li>
        <i className="material"
    </ul>
    )
}
export {BasketList}