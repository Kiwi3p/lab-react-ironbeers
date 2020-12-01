import React from 'react';
import { withRouter } from 'react-router-dom';
import BeerService from '../utils/api';

class AddBeer extends React.Component {
    state = {
        name: '',
        image_url: '',
        tagline: '',
        contributed_by: '',        
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    }

    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            //name, occupation
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const beerService = new BeerService();
        beerService.addBeer(this.state).then(() => {
            //Character at this state got added
            //Redirect the user to the characters list
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>

                <label>image_url:</label>
                <input type="text" name="image_url" onChange={this.handleChange} value={this.state.image_url}/>

                <label>tagline:</label>
                <input type="text" name="tagline" onChange={this.handleChange} value={this.state.tagline}/>

                <label>contributed_by:</label>
                <input type="text" name="contributed_by" onChange={this.handleChange} value={this.state.contributed_by}/>
                <button>Create</button>
            </form>
        )
    }
}

export default withRouter(AddBeer);