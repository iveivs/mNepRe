import { useReducer } from 'react';
import './usereducer.css'
const UseReducer = () => {

	const reducer = (state, action) => {
		switch (action.type) {
			case "LEFT":
				return {...state, counterLeft: state.counterLeft + 1}
			
			case "RIGHT":
			return {...state, counterRight: state.counterRight + 1}

			case "BOTH":
			return { counterRight: state.counterRight + 1,  counterLeft: state.counterLeft + 1}
		
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, {
		counterLeft: 0,
		counterRight: 20,
	})
    return ( 
        <div className="appreducer">
            <h3>UseReduser</h3>
            <div className="counters">
				<div className="counter">
					<h2>Counter Left</h2>
					<h1>{state.counterLeft}</h1>
				</div>
				<div className="counter">
					<h2>Counter Right</h2>
					<h1>{state.counterRight}</h1>
				</div>
			</div>
			<div className="buttons-wrapper">
				<button onClick={()=>{ dispatch({type: "LEFT"}) }}>Left</button>
				<button  onClick={()=>{ dispatch({type: "RIGHT"}) }}>Right</button>
				<button  onClick={()=>{ dispatch({type: "BOTH"}) }}>Both</button>
			</div>
			
        </div>
     );
}
 
export default UseReducer;