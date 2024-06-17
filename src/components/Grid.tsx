import Column from "./Column.tsx";
import './Grid.css';
import {useEffect, useState} from "react";

function Grid(props: {binString: string, setBinString: React.Dispatch<React.SetStateAction<string>>}) {
  const parsedBinString = parseBinString(props.binString);
  const [parts, setParts] = useState<string[]>(parsedBinString);

  useEffect(() => {
    setParts(parseBinString(props.binString))
  }, [props.binString]);

  useEffect(() => {
    props.setBinString(parts.join(''));
  }, [parts]);


  const columns = Array(512).fill({}).map(((_, i) => (
      <div className="grid-item" key={i}>
        <Column binStringPart={parts[i]} index={i} setParts={setParts}/>
      </div>
      ))
  );

  return (
      <div className="grid-container">
        {columns}
      </div>
  )
}


function parseBinString(binString: string): string[] {
  const arr: string[] = [];
  let splitEnd = 8;
  let i = 0;

  while (i < binString.length) {
    const res = binString.substring(i, splitEnd)
    arr.push(res);
    i += 8;
    splitEnd += 8;
  }
  return arr;
}

export default Grid;