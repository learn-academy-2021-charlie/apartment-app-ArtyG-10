import React from 'react';

class ApartmentIndex extends React.Component {
  render() {
    return (
      <>
        <h2>All the apartments:</h2>
        {this.props.apartments && this.props.apartments.map(apartment => {
          return <p>{JSON.stringify(apartment)}</p>
        })}
      </>
    )
  }
}
export default ApartmentIndex;
