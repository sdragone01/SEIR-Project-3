import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import GameStorePage from "../NewOrderPage/GameStorePage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";
import NavBar from "../../components/NavBar";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import GameList from "../../components/GameList";
import UserPage from "../UserPage";
import GameIndexPage from "../GameIndex/GameIndex";
import GameDetails from "../GameDetails/GameDetails"
import { games } from "../../seed"
import AddGameForm from "../../components/AddGameForm";


const APIKEY = '3498f188321247eb96dee04d1c8e0928'
const url = `https://api.rawg.io/api/games?&key=${APIKEY}`

export default function App() {
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
          <NavBar className='searchbar' user={user} setUser={setUser} findGame={findGame} />
          <Routes>
            <Route path="/" />
            <Route
              path="/games/:gameName"
              element={<GameDetails games={games} />} />
            <Route path="/user" element={<UserPage />} />
            <Route path='/orders/new' element={<GameStorePage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/games' element={<GameIndexPage />} />
            <Route path='/new' element={<AddGameForm />} />
          </Routes>
          <GameList gamesArr={gamesArr} />
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}
