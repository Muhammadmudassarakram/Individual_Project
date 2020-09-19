import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0 {

    constructor() {
      this.auth0 = new auth0.WebAuth({
        domain: "dev-9koc35jr.eu.auth0.com",
        clientID: "80uWz1wCPSZt1KZIEQjOPG9Mvn1mdCu8",
        redirectUri: `http://localhost:3000/callback`,
        responseType: 'token id_token',
        scope: 'openid profile'
      });
  
      this.login = this.login.bind(this);
     // this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
    }
    
    handleAuthentication() {
        return new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
              this.setSession(authResult);
              resolve();
            } else if (err) {
              reject(err);
              console.log(err);
            }
          });
        })
      }

    setSession(authResult) {
        //To save tokens
       // const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    
        //Cookies.set('jwt', authResult.idToken);
      }



    login() {
        this.auth0.authorize();
      }
}
    const auth0Client = new Auth0();

export default auth0Client;
