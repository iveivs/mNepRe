import { useEffect, useContext } from "react"
import { ShopContext } from "../context"
function Alert() {
    const { name = '', closeAlert = Function.prototype } = useContext(ShopContext)

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [name])
    return (
        <div id="toast-container">
            <div className="toast"> {name} добавлен в корзину</div>
        </div>
    )
}
export {Alert}

//  // eslint-disable-next-line