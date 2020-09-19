import React from 'react';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends React.Component{

    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
      }

    render()
    {
        return(
        <React.Fragment>
            <h1>I am call back </h1>
        </React.Fragment>)
    }
}
export default withRouter(Callback);

