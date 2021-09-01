import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';

class ApartmentIndex extends React.Component {
  render() {
    return (
      <>
        <h2>All the apartments:</h2>
        {this.props.apartments && this.props.apartments.map(apartment => {
          return (<>Apartment number {apartment.id} in {apartment.city}.
          <a href={`/apartmentshow/${apartment.id}`}> More info </a><br />
          </>)})}
      </>
    )
  }
}
export default ApartmentIndex;
