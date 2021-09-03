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
            <>Apartment number {apartment.id} in {apartment.city}, ${apartment.price} rent.
            <a href={`/apartmentshow/${apartment.id}`}><br /> More info </a>
            <br />
            </>
          )
        }
      </>
    )
  }
}
export default ApartmentIndex;
