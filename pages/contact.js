import React from 'react';

class Contact extends React.Component{

    render()
    {
        return(
          <div className="contact" {...this.props.auth}>
            <h1>I am contact page</h1>
           </div>
        )
    }
}


export default Contact; 