import React, { useState, useEffect } from "react";

const Clicker = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        console.log('Hello');

        return () => console.log('good buy');
    }, [count])
    
    return (
        <div className="clicker">
            <button onClick={increment}>+</button>
            <span style={{ display: "inline-block", margin: "0 0.5rem" }}>
                {count}
            </span>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Clicker;
