import './index.css'
import {Component} from 'react'
import UpcMovieCard from '../UpcMovieCard'

class Popular extends Component {
  state = {popularData: []}

  componentDidMount() {
    this.getPopularData()
  }

  getPopularData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=5c92c56cd5ade8999023c7235fdcfb6b&language=en-US&page=1',
    )
    const data = await response.json()

    const updatedData = data.results.map(eachItem => ({
      originalTitle: eachItem.original_title,
      backdropPath: eachItem.backdrop_path,
      rating: eachItem.vote_average,
    }))

    this.setState({popularData: updatedData})
  }

  render() {
    const {popularData} = this.state
    return (
      <ul className="upcoming-items">
        {popularData.map(eachMovie => (
          <UpcMovieCard upcomingMovieDetails={eachMovie} key={eachMovie} />
        ))}
      </ul>
    )
  }
}
export default Popular
