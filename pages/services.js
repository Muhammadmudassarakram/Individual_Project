import React from 'react';
import Wraper from '../components/shared/Wraper';

class Services extends React.Component{

    render()
    {
        return(
          <div className="services" {...this.props.auth}>
            <h1>I am Services page</h1>
           </div>
        )
    }
}


export default Services;