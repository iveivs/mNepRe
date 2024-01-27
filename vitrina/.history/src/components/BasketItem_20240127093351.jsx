function BasketItem (props) {
    const {
        mainId, 
        displayName, regularPrice, quantity, removeFromBasket = Function.prototype} = props
    return <li className="collection-item ">
                {displayName} x {quantity} = {regularPrice * quantity} руб.
                <span className="secondary-content" onClick={() => {removeFromBasket(mainId)}}>
                    <i className="material-icons basket-delete">
                        close
                    </i>
                </span>
        </li>
}
export {BasketItem}