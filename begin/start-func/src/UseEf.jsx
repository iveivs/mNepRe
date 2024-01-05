import { useEffect, useState } from "react";

const UseEf = () => {
    const [todoTitle, setTodoTitle] = useState('Watch React Tuts')

    function getRandomValue(max) {
        return Math.floor(Math.random() * max ) + 1
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => setTodoTitle(data.title))
    }, [])

    return ( 
        <div>
            <h3>Use Effect</h3>
            <p>Random todo item: <strong>{todoTitle}</strong></p>
        </div>
    );
}

export default UseEf;
