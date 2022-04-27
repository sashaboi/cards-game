import { useContext, createContext, useState, useEffect } from "react";
import { dataarray } from "./dataarray";
const gameContext = createContext();
// dataarray.sort(() => Math.random() - 0.5);
const GameProvider = ({ children }) => {
  const [status, setStatus] = useState("Let's Go!");
  const [flipCard, setFlipCard] = useState(dataarray);
  const [twoCounter, setTwoCounter] = useState(0);
  const [turnCounter, setTurnCounter] = useState(0);
  const matchNotFoundHandler = (objsToCheck) => {
    console.log("not matching");
    setStatus("doesnt match :(");
    setTurnCounter((prev) => prev + 1);
    setTwoCounter(0);
    setTimeout(() => {
      setFlipCard((prev) =>
        prev.map((obj) =>
          obj.letter.toUpperCase() === objsToCheck[0].letter.toUpperCase() ||
          obj.letter.toUpperCase() === objsToCheck[1].letter.toUpperCase()
            ? { ...obj, tempShow: false, clicked: false }
            : { ...obj, clicked: false }
        )
      );
      setStatus("Play next");
    }, 1000);
  };
  const matchFoundHandler = (objsToCheck) => {
    setStatus("Matching!");
    console.log("matching");
    setTurnCounter((prev) => prev + 1);
    setTwoCounter(0);
    setTimeout(() => {
      setFlipCard((prev) =>
        prev.map((obj) =>
          obj.letter.toUpperCase() === objsToCheck[0].letter.toUpperCase()
            ? { ...obj, solved: true }
            : { ...obj, clicked: false }
        )
      );
      setStatus("Play next");
    }, 1000);
  };
  const checkMatching = () => {
    const objsToCheck = flipCard.filter(
      (obj) => obj.tempShow === true && obj.solved === false
    );
    setFlipCard((prev) =>
      prev.map((obj) => {
        return { ...obj, clicked: true };
      })
    );
    objsToCheck[0].letter.toUpperCase() === objsToCheck[1].letter.toUpperCase()
      ? matchFoundHandler(objsToCheck)
      : matchNotFoundHandler(objsToCheck);
  };
  useEffect(() => {
    twoCounter === 2 && checkMatching();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twoCounter]);
  useEffect(() => {
    let winnercount = 0;
    flipCard.map((obj) => obj.solved && winnercount++);
    console.log(winnercount);
    winnercount > 15 && setStatus("You have won, congrats!");
  }, [flipCard]);
  return (
    <gameContext.Provider
      value={{
        status,
        flipCard,
        setFlipCard,
        twoCounter,
        setTwoCounter,
        turnCounter
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

const UseGame = () => useContext(gameContext);

export { UseGame, GameProvider };
