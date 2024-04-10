import './index.css'
import {Component} from 'react'
import UpcMovieCard from '../UpcMovieCard'

class Upcoming extends Component {
  state = {upcomingData: []}

  componentDidMount() {
    this.getUpcomingData()
  }

  getUpcomingData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=5c92c56cd5ade8999023c7235fdcfb6b&language=en-US&page=1',
    )
    const data = await response.json()

    const updatedData = data.results.map(eachItem => ({
      originalTitle: eachItem.original_title,
      backdropPath: eachItem.backdrop_path,
      rating: eachItem.vote_average,
    }))

    this.setState({upcomingData: updatedData})
  }

  render() {
    const {upcomingData} = this.state
    return (
      <ul className="upcoming-items">
        {upcomingData.map(eachMovie => (
          <UpcMovieCard upcomingMovieDetails={eachMovie} key={eachMovie} />
        ))}
      </ul>
    )
  }
}
export default Upcoming
