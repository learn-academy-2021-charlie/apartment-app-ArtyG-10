import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';

class ApartmentIndex extends React.Component {
  render() {
    return (
      <>
        <h2>All the apartments:</h2>
        {this.props.apartments && this.props.apartments
          .map(apartment =>
            <div key={apartment.id}>Apartment number {apartment.id} in {apartment.city}, ${apartment.price} rent.
            <a href={`/apartmentshow/${apartment.id}`}><br /> More info </a>
            <br />
            </div>
          )
        }
      </>
    )
  }
}
export default ApartmentIndex;
