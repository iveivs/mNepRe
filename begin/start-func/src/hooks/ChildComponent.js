import { useEffect, useState } from "react";

const ChildComponent = ({increaseOn100}) => {
    const [value, setValue] = useState(null)

    useEffect(() => {
        console.log('ChildComponent use Efect run');
        setValue(increaseOn100())
    }, [increaseOn100])
    return ( 
        <div>
            <h4>Child Component. Counter2 + 100 = { value }</h4>
        </div>
     );
}
 
export default ChildComponent;