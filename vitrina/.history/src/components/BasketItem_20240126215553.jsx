function BasketItem (props) {
    const {id, name, price, quantity} = props
    return <li className="collection-item ">
                {name} x {quantity} = {price}
                <span className="secondary-content">
                    <i></i>
                </span>
        </li>
}
export {BasketItem}