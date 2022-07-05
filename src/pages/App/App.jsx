import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import GameStorePage from "../NewOrderPage/GameStorePage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";
import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import SearchBar from "../../components/SearchBar";
import GameList from "../../components/GameList";
import RandomGame from "../../components/RandomGame";


const fetch = require('node-fetch');
const APIKEY = '3498f188321247eb96dee04d1c8e0928'
const url ='https://api.rawg.io/api/games/3328?key=3498f188321247eb96dee04d1c8e0928'
// const url = `https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`
// change
// change 2
export default function App() {
  const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          );
        }
        let actualData = await res.json();
        console.log(actualData)
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
  const [user, setUser] = useState(getUser())
  const [gamesArr, setGamesArr] = useState([])
  let gameResults = []
  const findGame = async (searchText) => {
    gameResults = await fetch(`https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`, {
      method: 'GET'
    })
    .then((res) => {
      return res
        .json()
        .then((resJson) => {
          console.log(resJson.results);
          return resJson.results;
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
  setGamesArr(gameResults);
  }

  return (
    <main className="App">
      {user ?
        <>
          <SearchBar findGame={findGame} />
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders/new' element={<GameStorePage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
          <GameList gamesArr={gamesArr} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
      {/* <RandomGame data={data} /> */}
    </main>
  );
}
