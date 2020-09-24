import React from 'react';
import Wraper from '../components/shared/Wraper'
class About extends React.Component{

    render()
    {
        return(
          <div className="about" {...this.props.auth}>
            <h1>I am from react class component</h1>
           </div>
        )
    }
}
export default About;



