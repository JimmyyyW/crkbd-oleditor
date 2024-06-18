import './App.css'
import Grid from "./components/Grid.tsx";
import ByteRepresentation from "./components/ByteRepresentation.tsx";
import {useState} from "react";

function App() {

  const [binString, setBinString] = useState('0'.repeat(4095) + '1');

  return (
      <>
        <div>
          <h1>CRKBD OLEDITOR</h1>
          <Grid binString={binString} setBinString={setBinString} />
          <div className="lower-container">
            <ByteRepresentation binString={binString} setBinString={setBinString}/>
            <button className="button" onClick={() => setBinString('0'.repeat(4096))}>
              Reset
            </button>
          </div>
        </div>
      </>
  )
}

export default App
