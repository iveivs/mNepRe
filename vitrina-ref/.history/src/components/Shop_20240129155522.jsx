import { useState, useEffect, useContext } from "react"

import  { ShopContext} from '../context'
import { API_KEY, API_URL } from "../config"
import { Preloader } from "./Preloader"
import { GoodsList } from "./GoodsList"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

function Shop() {
    const { goods, loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext)
    // const[goods, setGoods] = useState([])

    // const[loading, setLoading] = useState(true)
    // const [order, setOrder] = useState([])
    // const [isBasketShow, setBasketShow] = useState(false)
    // const [alertName, setAlertName] = useState('')


    // в функцию получаем объект с id назаванием и ценой
    // const addToBasket = (item)=> {
    //     // проверяем есть ли уже в текущем стейте заказа этот текущий заказ,
    //     // чтоб не создавать новый
    //     const itemIndex = order.findIndex(
    //         (orderItem) => orderItem.mainId === item.mainId)
        
    //     // если нет, то добавляем просто новый объект
    //     if(itemIndex < 0) {
    //         const newItem = {
    //             ...item,
    //             quantity: 1,
    //         }
    //         setOrder([...order, newItem])
    //     }else {
    //         // если ранее уже был добавлен, то ищем его позицию
    //         const newOrder = order.map((orderItem, index) => {
    //             if(index === itemIndex) {
    //                 return {
    //                     ...orderItem,
    //                     quantity: orderItem.quantity + 1
    //                 }
                    
    //             } else {
    //                 return orderItem
    //             }
    //         })
    //         setOrder(newOrder)
    //     }
    //     setAlertName(item.displayName)
    // }

    // const removeFromBasket = (itemID) => {
    //     const newOrder = order.filter((el) => el.mainId !== itemID)
    //     setOrder(newOrder)
    // }   

    // const incrQuantity = (itemID) => {
    //     const newOrder = order.map((el) => {
    //         if (el.mainId === itemID) {
    //             const newQuantity = el.quantity + 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity,
    //             };
    //         } else {
    //             return el;
    //         }
    //     });
    //     setOrder(newOrder)
    // };

    // const decrQuantity = (itemID) => {
    //     const newOrder = order.map((el) => {
    //         if (el.mainId === itemID) {
    //             const newQuantity = el.quantity - 1;
    //             return {
    //                 ...el,
    //                 quantity: newQuantity >= 0 ? newQuantity : 0,
    //             };
    //         } else {
    //             return el;
    //         }
    //     });
    //     setOrder(newOrder)
    // }

    // const handleBasketShow = () => {
    //     setBasketShow(!isBasketShow)
    // }

    // const closeAlert = () => {
    //     setAlertName('')
    // }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        }).then(response => response.json())
        .then(data => {
            // data.shop && setGoods(data.shop)
            // setLoading(false)
            setGoods(data.shop)
        })
    },[])


    return <main className="container content">
        {/* <Cart quantity={order.length} handleBasketShow={handleBasketShow} /> */}
        <Cart quantity={order.length}  />
        {/* {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />} */}
        {loading ? <Preloader /> : <GoodsList goods={goods} />}
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
            alertName && <Alert   />
        }
    </main>
}
export { Shop }