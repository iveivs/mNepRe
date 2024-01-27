import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"

function Shop() {
    const[goods, setGoods] = useState([])
    const[loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)


    // в функцию получаем объект с id назаванием и ценой
    const addToBasket = (item)=> {
        // проверяем есть ли уже в текущем стейте заказа этот текущий заказ,
        // чтоб не создавать новый
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId)
        
        // если нет, то добавляем просто новый объект
        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        }else {
            // если ранее уже был добавлен, то ищем его позицию
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                    
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        console.log(order);
    
    }

    const removeFromBasket = (itemID) => {
        console.log('itemID', itemID);
        console.log('order start', order);
        const newOrder = order.filter((el) => el.id !== itemID)
        console.log('NEW ORDER', );
        setOrder(newOrder)
        console.log('order finish', order);
    }   

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

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


    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
        {
            isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} />
        }
    </main>
}
export { Shop }