import { useEffect, useRef, useState } from "react";


const RefWebCad = () => {
    const nameRef = useRef(null)
    // const [renderCount, setRenderCount] = useState(1) // не подходит
    const renderCount = useRef(1)
    const [name, setName] = useState('')
    const prevName = useRef('')


    const selectName = () => {
        nameRef.current.focus()
    }

    const changeName = (e) => {
        prevName.current = name
        setName(e.target.value)
        
    }

    useEffect(() => {
        // setRenderCount((prev) => {return prev + 1}) // не подходит
        renderCount.current = renderCount.current + 1
    })

    return ( 
        <div>
            <h1>UseRef</h1>
            <input onChange={changeName} type="text" ref={nameRef} placeholder="Введите имя"/>
            <button onClick={selectName}> selectname </button>
            <hr />
            <p>Render count: {renderCount.current}</p>
            <h3>name: {name}</h3>
            <br />
            <p>prevname: {prevName.current}</p>
        </div>
    );
}

export default RefWebCad;