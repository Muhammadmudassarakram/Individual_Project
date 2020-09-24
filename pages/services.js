import React from 'react';
import Wraper from '../components/shared/Wraper';

class Services extends React.Component{

    render()
    {
        return(
          <Wraper {...this.props.auth}>
            <h1>I am Services page</h1>
           </Wraper>
        )
    }
}


export default Services;