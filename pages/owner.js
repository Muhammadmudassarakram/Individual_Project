import React from 'react';
import withAuth from '../components/hoc/withAuth';

class Owner extends React.Component {

  render() {
    return (
      <div className='owner'  {...this.props.auth}>
        <div className='owner-container'>
          <h1> I am Owner Page </h1>
        </div>
      </div >
    )
  }
}

export default withAuth('siteOwner')(Owner);
