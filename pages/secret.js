import React from 'react';
import withAuth from '../components/hoc/withAuth';
import {getSecretData} from '../actions/index';
import Wraper from '../components/shared/wraper';

class Secret extends React.Component{
   
    static  getInitialProps() {
        const superSecretValue =  'super secret Value';
        return{superSecretValue}
        };
      
        state = {
            secretData: []
          }
        
          async componentDidMount() {
            const secretData = await getSecretData();
        
            this.setState({
              secretData
            });
          }
        
          displaySecretData() {
            const { secretData } = this.state;
                 
            if ( secretData && secretData.length > 0) {
              return secretData.map((data, index) => {
                return (
                  <div key={index}>
                    <p> { data.title }</p>
                    <p> { data.description }</p>
                  </div>
                )
              })
            }
        
            return null;
          }


    render(){
        const { superSecretValue } = this.props;
        return(
        <Wraper className="secret" {...this.props.auth}>
        <h1>I am Secret Page</h1>
        <p>Secrest content here</p>
        <h2> {superSecretValue} </h2>
          { this.displaySecretData() }
       </Wraper>)
    }
}
export default withAuth()(Secret);