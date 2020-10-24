import React, { Component } from 'react';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }
    render() {
        return(
            <div className="text-center container">
                <h1>This is the home component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary">
                                    <label className="m-0 px-1">Enter your name</label>
                                </div>
                            </div>
                            <input className="form-control" id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <p>{this.state.greeting}</p>
            </div>
            
        )
    };
};
