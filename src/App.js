import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WhosWatching from './components/WelcomePage/whosWatching';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Catalog from './components/Catalog';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import User from './components/User';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Amit", imgUrl: "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/8bc447512b9e74a71e124a89.png?h=9799dacd08dcc8dc3b707d0e646418e4", budget: 10 },
        { name: "Elik", imgUrl: "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/12f6c2c5778c8b05845e39cd.png?h=2e2420dde09ff636194bf0f4e6b8ec08", budget: 7 },
        { name: "Yael", imgUrl: "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc.png?h=b16d81f42495097189e3cebe5461e0d0", budget: 5 },
        { name: "Shalev", imgUrl: "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/b6019aa953bffef6b4d2e8dd.png?h=81d2bb77ecf5c141bb7f8f0a86300470", budget: 10 }
      ],
      movies: [
        { id: "0", isRented: false, title: "Tarzan", year: 1999, img: "https://resizing.flixster.com/3g9eW87hjGHP2wBGsjXmNHM7psI=/300x300/v2/https://flxt.tmsimg.com/assets/p22963_v_v13_ae.jpg", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: "1", isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: "2", isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: "3", isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: "4", isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      connectedUser: "Amit",
      rentedMoviesId: [],
      filter: ""

    }
  }
  setConnectedUser = (name) => {
    console.log("here")
    this.setState({ connectedUser: name })
  }

  rentMovie = (MovieId) => {
    if (this.reduceBudget()) {
      const rentedMovies = [...this.state.rentedMoviesId]
      rentedMovies.push(MovieId)
      this.setState({ rentedMoviesId: rentedMovies })
    }
    else {
      alert("You can't afford this movie")
    }


  }

  returnMovie = (movieId) => {
    const rentedMovies = [...this.state.rentedMoviesId]
    const filterRentedMovies = rentedMovies.filter(id => id !== movieId)
    this.setState({ rentedMoviesId: filterRentedMovies })
    this.increaseBudget()
  }

  filterMovies = () => {
    if (!this.state.filter) {
      return this.state.movies
    }
    else {
      return this.state.movies.filter(f => f.title.toLowerCase().includes(this.state.filter.toLowerCase()))
    }

  }
  setFilter = (tofilter) => {
    this.setState({ filter: tofilter })
  }
  reduceBudget = () => {
    const users = [...this.state.users]
    const connectedUser = users.find(u => u.name === this.state.connectedUser)
    if (connectedUser.budget < 3) {
      return false
    }
    connectedUser.budget -= 3
    this.setState({ users: users })
    return true

  }

  increaseBudget = () => {
    const users = [...this.state.users]
    const connectedUser = users.find(u => u.name === this.state.connectedUser)
    connectedUser.budget += 3
    this.setState({ users: users })

  }


  render() {
    return (<Router>
      <div>
        <div className='landing-page-buttons'>
          <Link to="/"><button className='home'>Home</button></Link>
          {/* <button className='catalog'>Catalog</button> */}
          <Link to="/catalog" replace={true}><button className='catalog'>Catalog</button></Link>
          <span className='budget'>Budget: {this.state.users.find(u => u.name === this.state.connectedUser).budget}$</span>
        </div>
        <div className='App-logo'></div>
        <Route path="/catalog" exact render={() => <><Search setFilter={this.setFilter} value={this.state.filter} /><br></br><Catalog movies={this.filterMovies()} state={this.state} rentMovie={this.rentMovie} rentedMovies={this.state.rentedMoviesId} returnMovie={this.returnMovie} /></>} />
        <Route path="/" exact render={() => <WhosWatching users={this.state.users} img={this.state.imgUrl} setConnectedUser={this.setConnectedUser} />} />
        <Route path="/catalog/:movie" exact render={({ match }) => <MovieDetails movie={this.state.movies.find(movie => movie.id === match.params.movie)} />} />



      </div>
    </Router>);
  }
}

export default App;

