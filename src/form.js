import React, { Component } from 'react';

class Form extends Component{

    render() {
        return (
            <div>
                <h1>Form</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <select>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option selected value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>

                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;