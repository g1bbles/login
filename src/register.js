import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }

    render() {
        return (
            <div>
                <h1
                    title="Register"
                />
                <label>
                    Name:
                    <input type="text" value={this.state.first_name} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;