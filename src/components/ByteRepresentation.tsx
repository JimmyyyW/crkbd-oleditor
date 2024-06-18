import './ByteRepresentation.css';
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {binToHex, hexToBin} from "./utils.ts";

function ByteRepresentation(props: {
  binString: string,
  setBinString: Dispatch<SetStateAction<string>>,
}) {

  const [str, setStr] = useState(binToHex(props.binString).toString());
  const [validStyle, setValidStyle] = useState({});

  useEffect(() => {
    setStr(binToHex(props.binString).toString());
  }, [props.binString]);

  const handleChange = (event: { target: { value: string; }; }) => {
    const textValue = event.target.value
    setStr(textValue);
    const formatted = replaceAll(replaceAll(textValue, '\n', ''), ' ', '');
    const binString = hexToBin(formatted);
    if (!binString.includes("undefined")) {
      props.setBinString(binString);
      setValidStyle({});
    } else {
      setValidStyle({
        borderColor: 'red',
        borderWidth: '2px',
        borderStyle: 'solid',
      })
    }
  };

  return (
      <div className="textarea-container">
          <textarea
              className="large-textarea"
              value={str}
              onChange={handleChange}
              style={validStyle}
              spellCheck={false}
          />
      </div>
  )
}

function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(find, 'g'), replace);
}

export default ByteRepresentation;