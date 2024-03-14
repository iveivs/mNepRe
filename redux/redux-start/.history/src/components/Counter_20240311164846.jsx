import { increment,decrement, reset  } from "../store";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
  
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment)}>+</button>
        <button onClick={() => dispatch(decrement)}>-</button>
        <button onClick={() => dispatch(reset)}>reset</button>
        <button>reset</button>
      </div>
    )
  }