
import './AboutGrid.css'


export default function AboutGrid() {

    return (
        <div className="container">
            <div className="About-Img">

            </div>
            <div className="Content">
                <div className="Head">
                    <h1 className='about-headder'>About Us</h1>
                    <hr className='about-head-line' />
                </div>
                <div className="Body">
                    <p>Thunder Gun Games is an online game marketplace to purchase, browse, and play computer games.  </p>
                    <hr className='about-head-line' />
                    <h1 className='about-experience'>The Thunder Gun Games Experience:</h1>
                    <ul>
                        <li>Browse New Games</li>
                        <li>Purchase Games</li>
                        <li>Play Games</li>
                    </ul>
                    <hr className='about-head-line' />
                    <h1 className='about-tech'>Technology Used</h1>
                    <p><b>CLIENT:</b> React, MUI, CSS</p>
                    <p><b>SERVER:</b> Node, Express, Mongo DB</p>


                </div>
                <div className="Foot">
                    <p><b>Created By:</b></p>
                    Christopher Chapa, Norberto Cardenales, Sal Dragone
                </div>
            </div>
        </div>
    )
}


