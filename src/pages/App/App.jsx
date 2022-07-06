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
import UserPage from "../UserPage";
import GameIndexPage from "../GameIndex/GameIndex";

const APIKEY = '3498f188321247eb96dee04d1c8e0928'
const url = `https://api.rawg.io/api/games?&key=${APIKEY}`

export default function App() {
  const [user, setUser] = useState(getUser())
  const [gamesArr, setGamesArr] = useState([])
  let gameResults = []


  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          )
        }
        return res.json()
      })
      .then((actualData) => {
        setIndex(actualData); setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setIndex(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


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
          <NavBar className='searchbar' user={user} setUser={setUser} />
          <Routes>
            <Route path="/user" element={<UserPage />} />
            <Route path='/orders/new' element={<GameStorePage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path= '/games' element={<GameIndexPage/>} />
          </Routes>
          <GameList gamesArr={gamesArr} />
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}
