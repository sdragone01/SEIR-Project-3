// import { useEffect, useState } from "react"
// import RandomGameCard from "./RandomGameCard"
// export default function RandomGame({data}) {

//     const randomNumber = Math.floor(Math.random()* 813540)
//     const url ='https://api.rawg.io/api/games?45345&key=3498f188321247eb96dee04d1c8e0928'
    
//     // useEffect(() => {
//     //     const getData = async () => {
//     //       try {
//     //         const res = await fetch(url);
//     //         if (!res.ok) {
//     //           throw new Error(
//     //             `This is an HTTP error: The status is ${res.status}`
//     //           );
//     //         }
//     //         let actualData = await res.json();
//     //         console.log(actualData)
//     //         setData(actualData);
//     //         setError(null);
//     //       } catch(err) {
//     //         setError(err.message);
//     //         setData(null);
//     //       } finally {
//     //         setLoading(false);
//     //       }  
//     //     }
//     //     getData()
//     //   }, [])
    

//     return(
//         <>
//             <h1>Game Spotlight</h1>
//             {data.map((game) => {
//         return <RandomGameCard key={game.id} game={game}/>
//   })}
//         </>
//     )
// }