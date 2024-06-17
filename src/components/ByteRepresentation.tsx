import './ByteRepresentation.css';
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {binToHex, hexToBin} from "./utils.ts";

function ByteRepresentation(props: {
  binString : string,
  setBinString: Dispatch<SetStateAction<string>>,
}) {

  const [str, setStr] = useState(binToHex(props.binString).toString());

  useEffect(() => {
    setStr(binToHex(props.binString).toString());
  }, [props.binString]);

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setStr(event.target.value);
    const binString = hexToBin(event.target.value);
    if (!binString.includes("undefined")){
      console.log('here')
      props.setBinString(binString);
    }
  };

  return (
      <div className="textarea-container">
        <textarea
            className="large-textarea"
            value={str}
            onChange={handleChange}
        />
      </div>
  )
}

export default ByteRepresentation;