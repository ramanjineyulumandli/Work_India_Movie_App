import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <div className="nav-container">
        <ul className="movie-header-items">
          <li className="main-header">
            <Link to="/" className="nav-link">
              MovieDb
            </Link>
          </li>
          <div className="items">
            <ul className="movie-items">
              <li>
                <Link to="/" className="nav-items">
                  Popular
                </Link>
              </li>

              <li>
                <Link to="/top-rated" className="nav-items">
                  Top Rated
                </Link>
              </li>

              <li>
                <Link to="/upcoming" className="nav-items">
                  Upcoming
                </Link>
              </li>
            </ul>
            <div className="search-container">
              <input
                type="search"
                className="input-container"
                placeholder="Movie Name"
              />
              <button className="btn" type="button">
                Search
              </button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  </>
)

export default Header
