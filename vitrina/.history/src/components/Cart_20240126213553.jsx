function Cart(props) {
    const {quantity = 0, handleBasketShow = function} = props
    return <div className="cart teal lighten-2 white-text">
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}   
    </div>
}
export {Cart}