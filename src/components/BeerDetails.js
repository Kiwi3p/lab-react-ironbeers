import React from 'react';
import BeerService from '../utils/api';
//import queryString from 'query-string';

class BeerDetails extends React.Component {
    state = {
        name: '',
        image_url: '',
        tagline: '',
        contributed_by: ''
    }

    componentDidMount(){
        const beerService = new BeerService();
        //How to get params from query string /characters?q=123
        //const values = queryString.parse(this.props.location.search) //location.search is a react call
        //console.log(values);
        //How to get param from the route params /characters/123
        let id = 'https://ih-beers-api2.herokuapp.com/beers/random';
        beerService.getBeer(id)
            .then((response) => {
               this.setState({ 
                name: response.data.name,
                image_url: response.data.image_url,
                tagline: response.data.tagline,
                contributed_by: response.data.contributed_by
               })
            })

    }

    render() {
        return(
            <div>
                <h1>Name: {this.state.name}</h1>
                           <img src={this.state.image_url} />
                           <p>Tagline: {this.state.tagline}</p> 
                           <p>Contributed by: {this.state.contributed_by}</p> 
            </div>
        )
    }

}

export default BeerDetails;