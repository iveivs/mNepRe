function BasketList (props) {
    const {order} = props
    return <ul className="collection">
        <li href="#!" className="collection-item active">Корзина</li>
        {/* <a href="#!" className="collection-item ">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a> */}
        <li href="#!" className="collection-item active">Общая стоимость</li>
    </ul>
}
export {BasketList}