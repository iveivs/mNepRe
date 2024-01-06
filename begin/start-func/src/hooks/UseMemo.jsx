import { useState, useMemo } from "react";
const UseMemo = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(50)

    function multiply(num) {
        console.log('multiply');
        for(let i = 0; i < 100000000; i++){}
        return num * 2
    }

    const increase1 = () => {
        setCounter1(prev => prev +1)
    }

    const increase2 = () => {
        setCounter2(prev => prev +1)
    }

    const counter2x2 = useMemo(()=> { return multiply(counter2)}, [counter2])

    return ( 
        <div>
            <h2>UseMemo</h2>
            <br />
            <div>
                <h4>Counter1: {counter1}</h4>
                <button onClick={increase1}>Increase</button>
            </div>
            <div>
                <h4>Counter2: {counter2}</h4>
                <button onClick={increase2}>Increase</button>
            </div>
            <div>
            <h4>Counter2 * 2: {counter2x2}</h4>
            </div>
        </div>
     );
}
 
export default UseMemo;