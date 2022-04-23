import "./styles.css";
import { v4 as uuid } from "uuid";
import CartComponent from "./Card-Component";
import { UseGame } from "./game-context";
export default function App() {
  const { status, flipCard, turnCounter } = UseGame();

  return (
    <div className="App">
      <h1>Card Game !</h1>
      <p>turns done: {turnCounter}</p>
      <div className="four-grid">
        {flipCard.map((letter) => (
          <div key={uuid()}>
            <CartComponent ltr={letter.letter} />
          </div>
        ))}
      </div>
      <div>{status}</div>
    </div>
  );
}
