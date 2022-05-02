import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <Link to='/gamepage'>Go to Game</Link>
        <Link to='/rules'>Rules</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
        <a href="https://github.com/sashaboi/cards-game" target='_blank' rel="noreferrer">Git Hub Page</a>
        <Link to='/aboutme'>About Onkar</Link>
    </div>
  )
}

export default HomePage