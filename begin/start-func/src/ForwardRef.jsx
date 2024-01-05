import { useEffect, useRef } from "react";

const ForwardRef = () => {
    const firstNameRef = useRef(null)
    const secondNameRef = useRef(null)
    const buttonRef = useRef(null)

    

    useEffect(()=>{
        firstNameRef.current.focus()
    }, [])

    const firstKeyDown = (e)=> {
        if(e.key === "Enter") secondNameRef.current.focus()   
    }

    const secondKeyDown = (e) =>{
        if(e.key === "Enter") buttonRef.current.focus() 
    }

    return ( 
        <div>
            <h2>Forward Ref</h2>
            <div className="forwardRefForm">
                <input onKeyDown={firstKeyDown} ref={firstNameRef} type="text" placeholder="First Name" />
                <input onKeyDown={secondKeyDown}  ref={secondNameRef} type="text" placeholder="Second Name" />
                <button ref={buttonRef}>Submit</button>
            </div>
        </div>
    );
}

export default ForwardRef;