import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import GameStorePage from '../NewOrderPage/GameStorePage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import SearchBar from '../../components/SearchBar';

const fetch = require('node-fetch');
const APIKEY='3498f188321247eb96dee04d1c8e0928'
// const url = `https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`




export default function App() {
  const [user, setUser] = useState(getUser())
  const [results, setResults] = useState([])
  let gameResults = []
  const findGame = async (searchText) => {
    gameResults = fetch(`https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`, {
  method: 'GET'
})
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err))
  .finally(setResults(gameResults))
}

  console.log(user)
  return (
    <main className="App">
      {user ? 
        <>
          <SearchBar findGame={findGame} />
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/orders/new' element={<GameStorePage/>} />
            <Route path='/orders' element={<OrderHistoryPage/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


