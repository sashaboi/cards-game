import { UseGame } from "./game-context";

import {BsFillQuestionCircleFill} from 'react-icons/bs';
const CartComponent = (props) => {
  const { flipCard, setFlipCard, setTwoCounter } = UseGame();
  const clickHandler = () => {
    setTwoCounter((twoCounter) => twoCounter + 1);
    setFlipCard(
      flipCard.map((obj) =>
        obj.letter === props.ltr
          ? { ...obj, tempshow: !obj.tempshow, clicked: !obj.clicked }
          : { ...obj }
      )
    );
  };
  const letterObj = flipCard.find((obj) => obj.letter === props.ltr);
  

  return (
    <div onClick={() => clickHandler()}>
      <button className={`card-component-btn ${letterObj.solved&&"solved"}`} disabled={letterObj.solved || letterObj.clicked}>
        {letterObj.tempshow ? <div className="solved-item">{props.ltr.toUpperCase()}</div> : <div className="question-icon"><BsFillQuestionCircleFill/></div>}
      </button>
    </div>
  );
};

export default CartComponent;
