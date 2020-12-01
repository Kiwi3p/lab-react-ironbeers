import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <nav>
            <div className="all-beers">
            <h1>
            <Link exact to="/beers">All Beers</Link>
            </h1>
            </div>
            <div className="random-beers">
            <h1>
            <Link exact to="/beers/random">Random Beer</Link>
            </h1>
            </div>
            <div className="new-beers">
            <h1>
            <Link exact to="/beers/add">New Beer</Link>
            </h1>
            </div>
        </nav>
    )
}

export default Home;