import {useEffect, useState} from "react";
import "./Column.css";

function Column(props: {
  binStringPart: string,
  index: number,
  setParts: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const defaultSquares: string[] = initialSquares(props.binStringPart);
  const [squares, setSquares] = useState(defaultSquares)

  useEffect(() => {
    setSquares(initialSquares(reverseString(props.binStringPart)));
  }, [props.binStringPart]);

  const toggleColor = (index: number) => {
    setSquares((prevSquares: string[]) => {
      const newSquares = prevSquares.map((color, i) => (i === index ? (color === 'black' ? 'white' : 'black') : color));

      props.setParts((prevState: string[]) => {
        return prevState.map((prev: string, i: number) => {
          if (i === props.index) {
            return fromColors(newSquares);
          }else {
            return prev;
          }
        })
      })
      return newSquares;
    });
  }

  return (
      <div className="column-container">
        {squares.map((s: string, i: number) =>
            <div key={i}
                 className="column-box"
                 style={{ backgroundColor: s }}
                 onClick={() => toggleColor(i)}
            >
            </div>
        )}
      </div>
  )
}

function initialSquares(binString: string): string[] {
  const arr: string[] = [];
  for (let i = 0; i < binString.length; i++) {
    if (binString.charAt(i) == '1') {
      arr.push('white');
    } else {
      arr.push('black');
    }
  }
  return arr;
}

function fromColors(colors: string[]): string {
  let ret = '';
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'black') {
      ret += '0';
    } else {
      ret += '1';
    }
  }
  return reverseString(ret);
}

function reverseString(str: string): string {
  const splitStr = str.split('');
  return splitStr.reverse().join('');
}

export default Column;