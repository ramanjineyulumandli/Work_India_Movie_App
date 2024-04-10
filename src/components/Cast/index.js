import {Link} from 'react-router-dom'
import './index.css'

const Cast = props => {
  const {castDetails} = props
  const {id, name, character, profilePath} = castDetails
  return (
    <Link to={`/movie/${id}`} className="item-link">
      <li className="cast-items">
        <img
          src={`https://image.tmdb.org/t/p/w500/${profilePath}`}
          alt={name}
          className="img"
        />
        <h1 className="name">{name}</h1>
        <p className="name">{character}</p>
      </li>
    </Link>
  )
}

export default Cast
