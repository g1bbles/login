import React, { Component } from 'react';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    removeGreeting() {
        this.setState({ greeting: '' });
    }

    render() {
        return(

            <div>
                <h1 className="greeting">{this.state.greeting}</h1>
                <h2>h2</h2>
                <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
                <button className="remove" onClick={this.removeGreeting}>Remove</button>
                <textarea>
                    Hello there, this is some text in a text area
                </textarea>
            </div>
        );
    }
}

export default Contact;

