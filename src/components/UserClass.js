import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="user-card">
                <h2>Name :{this.props.name}-classbased </h2>
                <h3>Address : Indore</h3>
                <h4>contact: xyz@gmail.com</h4>
            </div>
          )
    }
}

export default UserClass;

