function BasketList (props) {
    const {order} = props
    return <ul className="collection">
        <li className="collection-item active">Корзина</li>
        {/* <a href="#!" className="collection-item ">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a> */}
        <li className="collection-item active">Общая стоимость</li>
    </ul>
}
export {BasketList}