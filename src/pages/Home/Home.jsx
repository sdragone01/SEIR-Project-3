
import './Home.css'
import PlayGame from '../../components/PlayGame'
import PlayGame2 from '../../components/PlayGame2'


export default function Home() {

    return (
        <div className="home-container">
            <div className="home-Head">

            </div>
            <div className="home-Spacer"></div>
            <div className="home-Left">
                <h1 className="staff-pick"> Staff Pick of the Week | "Fruit Ninja" </h1>
                <hr />
                <br />
                <img className='game-img' src="https://global-uploads.webflow.com/5fa23905123118739c5e21e2/5fa2390512311866d95e27a5_FruitNinjaThumb-op.jpeg" alt="" /> <br />
                <PlayGame />
            </div>
            <div className="home-right">
                <h1 className="upcoming-pick"> Upcoming Releases | "Hashiwokakero"</h1>
                <hr />
                <br />

                <img className='game-img' src="https://www.htmlgames.com/uploaded/game/thumb/hashiwokakero300.jpg" alt="" /> <br />
                <PlayGame2 />
            </div>
            <div className="home-Spacer-2"></div>
            <div className="home-Footer"></div>
        </div>
    )
}