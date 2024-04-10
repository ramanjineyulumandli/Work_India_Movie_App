import './App.css'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Upcoming from './components/Upcoming'
import Popular from './components/Popular'
import MovieDetail from './components/MovieDetail'
import TopRated from './components/TopRated'

const App = () => (
  <div className="app-con">
    <Header />
    <Switch>
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/" component={Popular} />
      <Route exact path="/movie/:id" component={MovieDetail} />
    </Switch>
  </div>
)
export default App
