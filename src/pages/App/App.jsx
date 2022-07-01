import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import GameStorePage from '../NewOrderPage/GameStorePage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
require('dotenv').config()
const fetch = require('node-fetch');


const url = `https://api.rawg.io/api/games?key=${process.env.APIKEY}`


fetch(url/*, options*/)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

export default function App() {
  const [user, setUser] = useState(getUser())

  console.log(user)
  return (
    <main className="App">
      {user ? 
        <>
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


