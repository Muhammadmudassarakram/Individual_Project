import React from 'react';

/*const About=(props)=>{
    //const message ='Hi I am about page'; 
return(

//<h1>this is about {props.message}</h1>
React.createElement('h1',null,"I am created from reactElement")
)
}*/


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





//equalent of arrow function
/*function About()
{
    const message ='Hi I am about page';
return(
<h1>{message}</h1>
)
}
export default About;
*/