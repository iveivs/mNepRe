function BasketItem (props) {
    const {
        mainId, 
        displayName, 
        regularPrice, 
        quantity, 
        removeFromBasket = Function.prototype,
        decrQuantity = Function.prototype, 
        incrQuantity = Function.prototype
    } = props
    return <li className="collection-item ">
                {displayName}  {'  '} {'  '}
                <div></div> = {regularPrice * quantity} руб.
                <span 
                    className="secondary-content" 
                    onClick={() => {removeFromBasket(mainId)}}
                >
                    <i className="material-icons basket-delete">
                        close
                    </i>
                </span>
        </li>
}
export {BasketItem}