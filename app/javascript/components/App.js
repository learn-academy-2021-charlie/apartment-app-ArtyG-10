import React from "react"
import PropTypes from "prop-types"
import Home from './pages/home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ApartmentIndex from './pages/apartmentindex.js'
import ApartmentShow from './pages/apartmentshow.js'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount() {
    this.apartmentIndex()
  }

  apartmentIndex = () => {
  fetch('/apartments')
  .then(response => response.json())
  .then(data => this.setState({apartments: data}))
  .catch(errors => console.log("index errors:", errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentindex" render={(props) => {
            return <ApartmentIndex apartments={this.state.apartments} />
          }}/>
          <Route path='/apartmentshow/:id' render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment}/>
          }}/>
        </Switch>
        <Footer
        />
      </Router>
    )
  }
}

export default App;
