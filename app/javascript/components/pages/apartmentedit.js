import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends React.Component {
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
      submitted: false,
      propsloaded: false
    }
  }

  componentDidUpdate = () => {
    let { apartment } = this.props
    if (this.state.propsloaded === false) {
      this.setState({
        form: {
          street: apartment.street,
          city: apartment.city,
          state: apartment.state,
          manager: apartment.apartmentmanager,
          email: apartment.email,
          price: apartment.price,
          bathrooms: apartment.bathrooms,
          pets: apartment.pets
        },
        propsloaded: true
      })
    }
  }

  handleChange = (e) => {
    let {form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateApartment(this.state.form, this.props.apartment.id)
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
           <Input type="text" name="street" defaultValue={this.state.form.street} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>City</Label>
           <Input type="text" name="city" defaultValue={this.state.form.city} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>State</Label>
           <Input type="text" name="state" defaultValue={this.state.form.state} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Manager</Label>
           <Input type="text" name="manager" defaultValue={this.state.form.manager} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Email</Label>
           <Input type="text" name="email" defaultValue={this.state.form.email} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Price</Label>
           <Input type="text" name="price" defaultValue={this.state.form.price} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Bedrooms</Label>
           <Input type="integer" name="bedrooms" defaultValue={this.state.form.bedrooms} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Bathrooms</Label>
           <Input type="integer" name="bathrooms" defaultValue={this.state.form.bathrooms} onChange={ this.handleChange }/>
         </FormGroup>
         <FormGroup>
           <Label>Pets</Label>
           <Input type="text" name="pets" defaultValue={this.state.form.pets} onChange={ this.handleChange }/>
         </FormGroup>
        </Form>
        <button
          type="submit"
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
