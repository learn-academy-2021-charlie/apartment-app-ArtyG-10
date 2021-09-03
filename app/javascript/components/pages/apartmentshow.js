import React from 'react';
import { NavLink } from 'react-router-dom'

class ApartmentShow extends React.Component {
  render() {
    return (
      <>
        {JSON.stringify(this.props.apartment)}
        {this.props.apartment && this.props.logged_in && this.props.current_user.id === this.props.apartment.user_id &&(
        <a href={`/apartmentedit/${this.props.apartment.id}`}>
        <br /><br />
        Edit this Apartment
        </a>)}
      </>
    )
  }
}
export default ApartmentShow;
