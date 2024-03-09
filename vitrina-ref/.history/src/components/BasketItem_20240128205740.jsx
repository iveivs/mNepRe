import { useContext } from "react"
import { ShopContext } from "../context"
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

    const { } 


    return <li className="collection-item ">
                {displayName}  {'  '} {'  '}
                <span className="qantity-box">
                    <i className="material-icons basket-quantity" onClick={() => {decrQuantity(mainId)}} >remove</i> 
                        {quantity} {' '} 
                    <i className="material-icons basket-quantity" onClick={() => {incrQuantity(mainId)}}>add</i>    
                </span> = {regularPrice * quantity} руб.
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