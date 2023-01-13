import React, {useCallback, useEffect, useState} from "react";

interface IShuffledText {
  names: string[]
}

const ShuffledText: React.FC<IShuffledText> = ({names}) => {
  const [name, setName] = useState(names[0]);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setName(names[index]);
  }, [names]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return(
    <span> {name}</span>
  )
}

export default ShuffledText;