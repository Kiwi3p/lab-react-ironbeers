import React from 'react';
import BeerService from '../utils/api';
import { Link } from 'react-router-dom';
//import queryString from 'query-string';

class Beers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        const beerService = new BeerService();
        beerService.getAll()
            .then((response) => {
                console.log(response);
                this.setState({
                    beers: response.data //data is general axios call
                })
            }); 
    }


    render(){
        return(
            <div>
                {this.state.beers.map((beer, index) => {
                    return (
                        <div key={index}>
                           <h1>{beer.name}</h1>
                           <img src={beer.image_url} />
                           <p>{beer.tagline}</p> 
                           <p>{beer.contributed_by}</p> 
                           <Link to={`/beers/${beer._id}`}>Details</Link> 
                        </div>
                    )
                })}
            </div>
        )
    }
} 

export default Beers;