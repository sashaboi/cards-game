import React from 'react'
import { useEffect } from "react";

import { v4 as uuid } from "uuid";
import { useQuery } from "@apollo/client";

import { UseGame } from '../../contexts/game-context';
import { LOAD_LEADERBOARD } from '../../GraphQl/Queries';

import CardComponent from '../../components/Card-Component';
const GamePage = () => {
    const { status, flipCard, turnCounter } = UseGame();
  const {data}=useQuery(LOAD_LEADERBOARD)

  useEffect(()=>{
    console.log('data from api',data)
  },[data])
  return (
    <div><div className="main-heading">Match the pairs</div>
    <div className="game-container">
      <div className="nav">
        
        <div className="game-status">{status}</div>
        
        <p className="turns-counter">turns done: <span>{turnCounter}</span></p>
      </div>
      <div className="four-grid">
        {flipCard.map((cardObj) => (
          <div key={uuid()}>
            <CardComponent ltr={cardObj.letter} />
          </div>
        ))}
      </div>
    </div></div>
  )
}

export default GamePage