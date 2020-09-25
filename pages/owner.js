import React from 'react';
import withAuth from '../components/hoc/withAuth';
import Wraper from '../components/shared/wraper';

class Owner extends React.Component {

  render() {
    return (
      <Wraper className="owner"  {...this.props.auth}>
        <div className='owner-container'>
          <h1> I am Owner Page </h1>
        </div>
      </Wraper >
    )
  }
}

export default withAuth('siteOwner')(Owner);
