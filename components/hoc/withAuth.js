import React from 'react';

export default role => Component =>
  class withAuth extends React.Component {

  static async getInitialProps(args) {
    const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

    return { ...pageProps };
  }

  renderProtectedPage() {
    const { isAuthenticated, user } = this.props.auth;
    const userRole = user && user[`${process.env.NAMESPACE}/role`];
    let isAuthorized = false;

    if (role) {
      if (userRole && userRole === role) { isAuthorized = true };
    } else {
      isAuthorized = true;
    }

    if (!isAuthenticated) {
      return (
        <div className='withAuth' {...this.props.auth}>
          <div className='withAuth-container'>
            <h1> You are not authenticated. Please Login to access this page. </h1>
          </div>
        </div>
      )
    } else if (!isAuthorized) {
      return (
        <div className='withAuth' {...this.props.auth}>
          <div className='withAuth-container'>
            <h1> You are not authorized. You dont have a permission to visit this page </h1>
          </div>
        </div>
      )
    } else {
      return ( <Component {...this.props} />)
    }
  }

  render() {
    return this.renderProtectedPage()
  }
}



