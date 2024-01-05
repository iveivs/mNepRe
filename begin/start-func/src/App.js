import React, { useState } from "react";
import Clicker from "./Clicker";
import WithRef from "./Ref";
import RefWebCad from "./RefWebCademy";
import Timer from "./Timer";
import './index.css';
import ModalWindow from "./ModalWindow";
import ForwardRef from "./ForwardRef";
import UseEf from "./UseEf";
import { Context } from "./hooks/Context";
import { Books } from "./components/Books"
import UseReducer from "./hooks/UseReducer/UseReducer";
import UseReducer2 from "./hooks/UseReducer2/Usereducer2";

function App() {
  const [isClicker, setIsClicker] = useState(false)

  
  return (
    <div className="App">
        <button onClick={() => setIsClicker(!isClicker)}>Toggle Clicker</button>
        {isClicker && <Clicker />}
        {/* <Clicker  /> */}
        <br />
        < WithRef/>
        <br />
        <hr />
        <Timer />
        <br />
        <hr />
        <RefWebCad  />
        <br />
        <hr />
        <br />
        <ModalWindow  />
        <br />
        <hr />
        <ForwardRef  />
        <br />
        <hr />
        <UseEf  />
        <br />
        <hr />
        <Context>
          <Books />
        </Context>
        <br />
        <hr />
        <UseReducer />
        <br />
        <hr />
        < UseReducer2 />
    </div>
  );
}

export default App;
