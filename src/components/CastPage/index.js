import './index.css'
import {Component} from 'react'

import Cast from '../Cast'

class CastPage extends Component {
  state = {castData: []}

  componentDidMount() {
    this.getCastPageData()
  }

  getCastPageData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5c92c56cd5ade8999023c7235fdcfb6b&language=en-US`,
    )
    console.log(response)
    const data = await response.json()

    const updatedData = data.results.map(eachItem => ({
      name: eachItem.original_name,
      character: eachItem.character,
      profilePath: eachItem.profile_path,
    }))

    this.setState({castData: updatedData})
  }

  render() {
    const {castData} = this.state
    return (
      <>
        <ul className="upcoming-items">
          {castData.map(eachMovie => (
            <Cast castPage={eachMovie} key={eachMovie} />
          ))}
        </ul>
      </>
    )
  }
}
export default CastPage
