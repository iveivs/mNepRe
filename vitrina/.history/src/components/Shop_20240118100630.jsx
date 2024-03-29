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
            console.log('data',data);
            data.shop && setGoods(data.shop)
            setLoading(false)
        })
    },[])

    const addToCart = (name)=> {
        console.log(object);
        setOrder( order.push(name))
    }


    return <main className="container content">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <GoodsList addToCart={addToCart} goods={goods} />}
    </main>
}
export { Shop }