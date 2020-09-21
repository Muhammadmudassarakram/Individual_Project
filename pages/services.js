import React from 'react';

class Services extends React.Component{

    render()
    {
        return(
          <div className="contact" {...this.props.auth}>
            <h1>I am Services page</h1>
           </div>
        )
    }
}


export default Services;