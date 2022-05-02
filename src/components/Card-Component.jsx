import { UseGame } from '../contexts/game-context';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
const CartComponent = ({ltr}) => {
  const { flipCard, setFlipCard, setTwoCounter } = UseGame();
  const cardClickHandler = () => {
    setTwoCounter((twoCounter) => twoCounter + 1);
    setFlipCard(
      flipCard.map((obj) =>
        obj.letter === ltr
          ? { ...obj, tempShow: !obj.tempShow, clicked: !obj.clicked }
          : { ...obj }
      )
    );
  };
  const letterObj = flipCard.find((obj) => obj.letter === ltr);
  

  return (
    
      <button onClick={() => cardClickHandler()} className={`card-component-btn ${letterObj.solved} ${letterObj.clicked && "clicked"}`} disabled={letterObj.solved || letterObj.clicked}>
        {letterObj.tempShow ? <div className="solved-item">{ltr.toUpperCase()}</div> : <div className="question-icon"><BsFillQuestionCircleFill/></div>}
      </button>
    
  );
};

export default CartComponent;
