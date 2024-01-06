import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";
const UseCallback = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(80)

    const increase1 = () => {
        setCounter1(prev => prev +1)
    }

    const increase2 = () => {
        setCounter2(prev => prev +1)
    }

    // это первый вариант, он не соовсем подходит, из-за постоянного ререндеринга
    // const increaseOn100 = () => {
    //     return counter2 + 100
    // }

    const increaseOn100 = useCallback(() => {
        return counter2 + 100
    }, [counter2])

    return ( 
        <div>
            <h2>UseCallback</h2>
            <br />
            <div>
                <h4>Counter1: {counter1}</h4>
                <button onClick={increase1}>Increase</button>
            </div>
            <div>
                <h4>Counter2: {counter2}</h4>
                <button onClick={increase2}>Increase</button>
            </div>
            < ChildComponent increaseOn100={increaseOn100} />
        </div>
    );
}

export default UseCallback;