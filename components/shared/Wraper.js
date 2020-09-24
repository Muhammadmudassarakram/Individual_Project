import { Children } from "react";

const Wraper= (props)=>{
    const{children}=props;
    return (<div className="container">{children}</div>)
     
    

}
export default Wraper;