import {Link} from 'react-router-dom'
import './index.css'

const UpcMovieCard = props => {
  const {upcomingMovieDetails} = props
  const {id, originalTitle, backdropPath, rating} = upcomingMovieDetails
  return (
    <Link to={`/movie/${id}`} className="item-link">
      <li className="movie-con">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdropPath}`}
          alt={originalTitle}
          className="img"
        />
        <div className="title-rating-con">
          <h1 className="title">{originalTitle}</h1>
          <p className="title">Rating: {rating}</p>
        </div>
      </li>
    </Link>
  )
}

export default UpcMovieCard
