import React from 'react';
import Wraper from '../components/shared/Wraper';
class About extends React.Component{

    render()
    {
        return(
          <Wraper {...this.props.auth}>
            <h1>I am from react class component</h1>
           </Wraper>
        )
    }
}
export default About;



