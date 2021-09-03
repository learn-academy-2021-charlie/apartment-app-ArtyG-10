import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends React.Component {
  constructor(props){
    super(props)
    let { apartment } = this.props
    this.state = {
      form:{
        street: apartment ? apartment.street : '',
        city: apartment ? apartment.city : '',
        state: apartment ? apartment.state: '',
        manager: apartment ? apartment.apartmentmanager: '',
        email: apartment ? apartment.email: '',
        price: apartment ? apartment.price: '',
        bedrooms: apartment ? apartment.bedrooms: '',
        bathrooms: apartment ? apartment.bathrooms: '',
        pets: apartment ? apartment.pets: ''
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let {form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateApartment(this.state.form)
    this.setState({submitted:true})
  }

  render() {
    console.log(this.state.form)
    return (
      <>
        <h3>Update apartment!</h3>
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
           <Input type="integer" name="bedrooms" value={this.state.form.bedrooms} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Bathrooms</Label>
           <Input type="integer" name="bathrooms" value={this.state.form.bathrooms} onChange={ this.handleChange }/>
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

export default ApartmentEdit;
