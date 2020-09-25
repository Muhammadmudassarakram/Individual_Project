import React from 'react';
import Wraper from '../components/shared/wraper';

class Contact extends React.Component{

    render()
    {
        return(
          <Wraper{...this.props.auth}>
            <h1>I am contact page</h1>
           </Wraper>
        )
    }
}


export default Contact; 