import B
function BasketList (props) {
    const {order} = props
    return <ul className="collection">
        <li className="collection-item active">Корзина</li>

        <li className="collection-item active">Общая стоимость</li>
    </ul>
}
export {BasketList}