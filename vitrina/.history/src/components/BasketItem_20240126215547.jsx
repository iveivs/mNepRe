function BasketItem (props) {
    const {id, name, price, quantity} = props
    return <li className="collection-item ">
                {name} x {quantity} = {price}
                <span className="secondary-content">
                    
                </span>
        </li>
}
export {BasketItem}