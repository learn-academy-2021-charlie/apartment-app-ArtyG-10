import React from 'react';
import { NavLink } from 'react-router-dom'

class ApartmentShow extends React.Component {
  render() {
    return (
      <>
        {JSON.stringify(this.props.apartment)}
        {this.props.apartment &&
        <a href={`/apartmentedit/${this.props.apartment.id}`}>
        <br /><br />
        Edit this Apartment
        </a>}
      </>
    )
  }
}
export default ApartmentShow;
