function BasketItem (props) {
    const {id, displayName, regularPrice, quantity} = props
    return <li className="collection-item ">
                {displayName} x {quantity} = {regularPrice}
                <span className="secondary-content">
                    <i className="material-icons">
                        close
                    </i>
                </span>
        </li>
}
export {BasketItem}