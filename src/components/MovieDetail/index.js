import './index.css'
import {Component} from 'react'

class MovieDetail extends Component {
  state = {movieDetailData: []}

  componentDidMount() {
    this.getMovieDetailData()
  }

  getMovieDetailData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5c92c56cd5ade8999023c7235fdcfb6b&language=en-US`,
    )
    const data = await response.json()

    const updatedData = {
      overview: data.overview,
      id: data.id,
      title: data.title,
      posterPath: data.poster_path,
      releaseDate: data.release_date,
      time: data.runtime,
      rating: data.vote_average,
      backdropPath: data.backdrop_path,
    }

    this.setState({movieDetailData: updatedData})
  }

  render() {
    const {movieDetailData} = this.state
    const {
      overview,

      title,
      posterPath,
      releaseDate,
      time,
      rating,
      backdropPath,
    } = movieDetailData
    return (
      <div className="movie-container">
        <div className="main-con">
          <div className="img-heading-con">
            <img src={posterPath} alt={title} className="image" />
            <div className="title-details">
              <h1 className="title">{title}</h1>
              <p className="rating">{rating}</p>
              <p className="time">{time}</p>
              <p className="date">{releaseDate}</p>
            </div>
            <div className="overview-con">
              <h1 className="heading">Overview</h1>
              <p className="para">{overview}</p>
            </div>
          </div>

          <div className="img-con">
            <img src={backdropPath} alt={title} className="backdrop" />
          </div>
        </div>
      </div>
    )
  }
}
export default MovieDetail
