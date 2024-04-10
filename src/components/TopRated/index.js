import './index.css'
import {Component} from 'react'
import UpcMovieCard from '../UpcMovieCard'

class TopRated extends Component {
  state = {topRatedData: []}

  componentDidMount() {
    this.getTopRatedData()
  }

  getTopRatedData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=5c92c56cd5ade8999023c7235fdcfb6b&language=en-US&page=1',
    )
    const data = await response.json()

    const updatedData = data.results.map(eachItem => ({
      originalTitle: eachItem.original_title,
      backdropPath: eachItem.backdrop_path,
      rating: eachItem.vote_average,
    }))

    this.setState({topRatedData: updatedData})
  }

  render() {
    const {topRatedData} = this.state
    return (
      <ul className="upcoming-items">
        {topRatedData.map(eachMovie => (
          <UpcMovieCard upcomingMovieDetails={eachMovie} key={eachMovie} />
        ))}
      </ul>
    )
  }
}
export default TopRated
