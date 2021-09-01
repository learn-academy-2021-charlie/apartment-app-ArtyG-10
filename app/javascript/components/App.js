import React from "react"
import PropTypes from "prop-types"
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ApartmentIndex from './pages/ApartmentIndex'


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
    console.log(this.state.apartments)
    return (
      <Router>
        <Header
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartmentIndex" render={(props) => {
            return <ApartmentIndex apartments={this.state.apartments} />
          }}/>
        </Switch>
        <Footer
        />
      </Router>
    )
  }
}

export default App;
