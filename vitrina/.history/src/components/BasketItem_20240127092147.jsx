function BasketItem (props) {
    const {id, displayName, regularPrice, quantity, removeFromBasket = Function.prototype} = props
    return <li className="collection-item ">
                {displayName} x {quantity} = {regularPrice}
                <span className="secondary-content" onClick={() =}>
                    <i className="material-icons basket-delete">
                        close
                    </i>
                </span>
        </li>
}
export {BasketItem}