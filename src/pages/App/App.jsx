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



// fetch(url/*, options*/)
// 	.then(res => res.json())
// 	.then(json => console.log(json.results))
// 	.catch(err => console.error('error:' + err));

export default function App() {
  const APIKEY='3498f188321247eb96dee04d1c8e0928'
  // const url = `https://api.rawg.io/api/games/${searchText}?key=${APIKEY}`
  const [user, setUser] = useState(getUser())
  const [results, setResults] = useState([])
  let arrResults = []

  const findGame = async (searchText) => {
    arrResults = await fetch(
      `https://api.rawg.io/api/games?search=${searchText}?key=${APIKEY}`
    )
      .then((res) => {
        return res
          .json()
          .then((resJson) => {
            console.log(resJson.data);
            return resJson.data;
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    setResults(arrResults);
    console.log(setResults)
  }

  console.log(user)
  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <SearchBar findGame={findGame}/>
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


