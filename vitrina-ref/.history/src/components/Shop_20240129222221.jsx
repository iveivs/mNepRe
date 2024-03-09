import { useState, useEffect, useContext } from "react"

import  { ShopContext} from '../context'
import { API_KEY, API_URL } from "../config"
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

function Shop() {
    const { loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        }).then(response => response.json())
        .then(data => {
            setGoods(data.shop)
        })

    },[])


    return <main className="container content">
        <Cart quantity={order.length}  />
        {/* {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />} */}
        {loading ? <Preloader /> : <GoodsList />}
        {
            isBasketShow && (
                <BasketList 
                // order={order}
                // handleBasketShow={handleBasketShow} 
                // removeFromBasket={removeFromBasket}
                // incrQuantity={incrQuantity}
                // decrQuantity={decrQuantity}
                />
            )
        }
        {
            // alertName && <Alert  name={alertName} closeAlert={closeAlert} />
            alertName && <Alert />
        }
    </main>
}
export { Shop }