import axios from 'axios';

class BeerService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_CHARACTERS_API}`,
    });
    this.service = service;
  }

  getAll() {
    //axios.get('http://localhost:5000/characters')
    return this.service.get('/beers');
  }

  getRandom() {
    //axios.get('http://localhost:5000/characters/1')
    return this.service.get(`/beers/random`);
  }

  getBeer(id) {
    //axios.get('http://localhost:5000/characters/1')
    return this.service.get(`/beers/${id}`)
}

  addBeer(beer) {
    //axios.post('http://localhost:5000/characters'), { name: 'miguel'}
    return this.service.post('/beers/new', beer);
  }
}

export default BeerService;
