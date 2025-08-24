import React, { Component } from 'react'
type Color = {
    color: string,
    fount: boolean,
}
export default class EX02 extends Component<{}, Color> {
    constructor(props: {}) {
    super(props);
        this.state = {
            color: "",
            fount: false,
        };
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({fount: true});
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({color: e.target.value});
        this.setState({fount: false});
    }
  render() {
    return (
      <div>
        <h1>Color: {this.state.fount ? this.state.color : ""} </h1>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="color" onChange={this.handleChange}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
