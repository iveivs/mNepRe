function BasketItem (props) {
    const {id, name, price, quantity} = props
    return <li className="collection-item ">
                {name} x {quantity} = {price}
                <span className=""></span>
        </li>
}
export {BasketItem}