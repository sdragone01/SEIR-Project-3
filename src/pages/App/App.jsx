import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import GameStorePage from "../NewOrderPage/GameStorePage";
import OrderHistoryPage from "../OrderHistory/OrderHistoryPage";
import NavBar from "../../components/NavBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import SearchBar from "../../components/SearchBar";
import GameList from "../../components/GameList";

const fetch = require("node-fetch");
const APIKEY = "3498f188321247eb96dee04d1c8e0928";
// const url = `https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`
// change
export default function App() {
  const [user, setUser] = useState(getUser());
  const [gamesArr, setGamesArr] = useState([]);

  let gameResults = [];

  const findGame = async (searchText) => {
    gameResults = await fetch(
      `https://api.rawg.io/api/games?search=${searchText}&key=${APIKEY}`
    )
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
  };

  return (
    <main className="App">
      {user ? (
        <>
          <SearchBar findGame={findGame} />
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/orders/new" element={<GameStorePage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
          <GameList gamesArr={gamesArr} />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
