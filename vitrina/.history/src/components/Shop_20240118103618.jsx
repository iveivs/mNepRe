import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"

function Shop() {
    const[goods, setGoods] = useState([])
    const[loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        }).then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop)
            setLoading(false)
        })
    },[])

    const addToBasket = (item)=> {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
        }else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        
                    }
                } else {
                    return item
                }
            })
        }
        
        setOrder([...order, item])
    }


    return <main className="container content">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
    </main>
}
export { Shop }