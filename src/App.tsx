import './App.css'
import Grid from "./components/Grid.tsx";
import ByteRepresentation from "./components/ByteRepresentation.tsx";
import {useState} from "react";

function App() {

  const [binString, setBinString] = useState('0'.repeat(4095) + '1');

  return (
      <>
        <div>
          <Grid binString={binString} setBinString={setBinString} />
          <ByteRepresentation binString={binString} setBinString={setBinString} />
        </div>
      </>
  )
}

export default App
