function BasketItem (props) {
    const {id, name, price, quantity} = props
    return <li className="collection-item ">
                {name} x {quantity} = {price}
                <span></span>
        </li>
}
export {BasketItem}