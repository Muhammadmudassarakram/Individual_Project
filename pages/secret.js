import React from 'react';

class Secret extends React.Component{
    renderSecretPage(){
        const {isAuthenticated} =this.props.auth;
        if(isAuthenticated){
            return(<div className="secret" {...this.props.auth}>
            <h1>I am Secret Page</h1>
            <p>Secrest content here</p>
           </div>)

        }
        else{
            return(<div className="secret" {...this.props.auth}>
            <h1>You are not Authorised</h1>
            <p>Please login to view the content of this page</p>
           </div>)
        }
    }


    render()
    {
        return this.renderSecretPage();
        
    }
}
export default Secret;