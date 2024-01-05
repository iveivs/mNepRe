import { useState, useRef, useEffect } from "react";

function setDefaultValue() {
    const userCount = localStorage.getItem('count')
    return userCount ? -userCount : 0;
}
const Timer = () => {
    const [count, setCount] = useState(setDefaultValue)
    const [isCounting, setIsCounting] = useState(false)
    const timerIdRef = useRef(null)


    const handleReset = () => {
        setCount(0)
        setIsCounting(false)
    }

    const handleStart = () => {
        setIsCounting(true)
    }

    const handleStop = () => {
        setIsCounting(false)
    }

    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])

    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1)
            }, 1000)
        }

        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current)
            timerIdRef.current = null
        }
    }, [isCounting])

    return ( 
        <div className="timer">
            <h2>React Timer</h2>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={handleStart}>Start</button>) :
                (<button onClick={handleStop}>Stop</button>)
                }
            
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Timer;