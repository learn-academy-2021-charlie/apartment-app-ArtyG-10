import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        street: '',
        city: '',
        state: '',
        manager: '',
        email: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        pets: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    let {form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewApartment(this.state.form)
    this.setState({submitted:true})
  }

  render() {
    console.log(this.state.form)
    return (
      <>
        <h3>Add a new apartment!</h3>
        <Form>
         <FormGroup>
           <Label>Street</Label>
           <Input type="text" name="street" value={this.state.form.street} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>City</Label>
           <Input type="text" name="city" value={this.state.form.city} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>State</Label>
           <Input type="text" name="state" value={this.state.form.state} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Manager</Label>
           <Input type="text" name="manager" value={this.state.form.manager} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Email</Label>
           <Input type="text" name="email" value={this.state.form.email} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Price</Label>
           <Input type="text" name="price" value={this.state.form.price} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Bedrooms</Label>
           <Input type="text" name="bedrooms" value={this.state.form.bedrooms} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Bathrooms</Label>
           <Input type="text" name="bathrooms" value={this.state.form.bathrooms} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Pets</Label>
           <Input type="text" name="pets" value={this.state.form.pets} onChange={ this.handleChange }/>
         </FormGroup>
        </Form>
        <button
          type="submit"
          value=""
          onClick={ this.handleSubmit }
        >
        Submit Profile
        </button>
        {this.state.submitted && <Redirect to='/apartmentindex' />}
      </>
    )
  }
}

export default ApartmentNew;
