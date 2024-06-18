import './App.css'
import Grid from "./components/Grid.tsx";
import ByteRepresentation from "./components/ByteRepresentation.tsx";
import {useState} from "react";

const binstr = '0000000000000000001100111011001110110011101100111011111110000011100000111011001110110011101100111011001110111110000111000000000000000000000000000000000000000000000000000000000010000000010000001000000000000000000000000000000000000000000000000000001100001100001100001100000000000111000111000111000011000000000000000000000000000000111000110001110000000000000000001110000100011110000000000000000000000000000000000000000000000000000000000000000000000000111110000000010010000100100000101000001010000001100000001000000010000000100010001000010010010011100010001000011010010001011010000010010000010010000100011000100001111100000001000000001100000000000000000000000000000000000000000000000000000000000000000000000000000000000111101011111110110011101111111011001110110011000100100000000000000000000000000000000000000000000000000000000000000000000000001001111011011111110110111001101100011011100110111101101111011011110110111001111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011011101111111011010110110101101100011011000110110001101100011011000110110001101100011011000100100001000000000000000000000000000000000000000000000000000000000000001100000100000010000001000100100010001001000100010010001000100100000001000000010000100100001001001110001100000000000000000100000011000001000000001100000000000000001100000000111111000010000000100000010000000100000110000010000000010000000010000000010000000010000000011101000100100000111000000000000000000000010000001100000011000000010000100000001100110000110011101100000101000000110000000100000000110000000011000000001110000000010000000000000000001101101011011000110110001111100000011000110110101111100001110000000000000000000000000000110011011111110110110101101101011011010110000100100001000000000000000000000000000000000000000000000000000000000000000000000000001011110110111101101100110011111000111110001111110011000110110001101111011011110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001001101110111111101101011011010110110001101100011011000110110001101100011011000110110001101100010010000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001110000010010001100010010000011100000000000000000000000011000001001000000001001000000010000000100000001000000000000000010001100100011111000100110001001100010011000101000001100000110000001000001100001100000100000010000001000000010000001000000100000001000000100000101000001011100100100111001010010001000100000001000000001000000000000000011000000001111000000001100000000000000000000000000000000000000000000000001000111011011110110110011101111111011110110110001100111010001110000000000000000000000000001111010111111101100111011111110110011101100110001001000000000000000000000000000000000000000000000000000000000000000000000000011111011110110111101101111111011111000111111001111011011110110111101101111011011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111110011111110100001101000011010000110100001101000011011100110111001101110011011100110111111101011110010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111110010000101000001010000011000001000000100000001100000001000000011000000010000000000000000000000001000000010000000010000000010000100011110000001000000001000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100001110001100001110000000000000000000000000000000000000000000000000000100000011000000110000001100000011000000110000001100000001000000000000000000000000001100110111111101101101011011010110110101100001001000010000000000000000000000000000000000000000000000000000000000000000000000000011110001111110011001100110000001100000011000000110000001100110011111100011110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

function App() {

  const [binString, setBinString] = useState(binstr);

  return (
      <>
        <div>
          <h1>CRKBD OLEDITOR</h1>
          <Grid binString={binString} setBinString={setBinString} />
          <div className="lower-container">
            <ByteRepresentation binString={binString} setBinString={setBinString}/>
            <div className="lower-button-container">
              <button className="button" onClick={() => setBinString('0'.repeat(4096))}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
