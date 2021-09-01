import React from 'react';

class ApartmentShow extends React.Component {
  render() {
    return (
      <>
        {JSON.stringify(this.props.apartment)}
      </>
    )
  }
}
export default ApartmentShow;
