import { Routes,Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage'
import Rules from './pages/Rules/Rules'
import Aboutme from './pages/AboutMe/AboutMe'
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import GamePage from "./pages/GamePage/GamePage";
import LostPage from "./pages/LostPage/LostPage";

import "./styles.css";

export default function App() {

  
  
  return (
    <div className="App"> 
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/gamepage" element={<GamePage/>}/>
        <Route path="*" element={<LostPage/>}/>

      </Routes>
    </div>
  );
}
