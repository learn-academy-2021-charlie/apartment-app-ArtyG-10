import React from "react"
import PropTypes from "prop-types"
import Home from './pages/home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ApartmentIndex from './pages/apartmentindex.js'
import ApartmentShow from './pages/apartmentshow.js'
import ApartmentNew from './pages/apartmentnew.js'
import ApartmentEdit from './pages/apartmentedit.js'


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

  createNewApartment = (input) => {
    return fetch('/apartments', {
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422) {
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(data => this.apartmentIndex())
    .catch(errors => console.log("create errors:", errors))
  }

  updateApartment = (apartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response =>{
      if(response.status === 422) {
        alert("Please check your submission.")
      } else {
        return response.json()
      }
    })
    .then(payload => {
      this.apartmentIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
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
          <Route exact path='/' component={ Home } />
          <Route
            path='/apartmentindex'
            render={props => <ApartmentIndex apartments={this.state.apartments}/>}
          />
          <Route path='/apartmentshow/:id' render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <ApartmentShow apartment={apartment} logged_in={logged_in}/>}}
          />
          <Route
            path='/apartmentnew'
            render={props => <ApartmentNew createNewApartment={this.createNewApartment}/>}
          />
          <Route
            path='/apartmentedit/:id'
            render= {props => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === +id)
              return <ApartmentEdit
                apartment={apartment}
                updateApartment ={this.updateApartment}/>}}
          />
        </Switch>
        <Footer
        />
      </Router>
    )
  }
}

export default App;
