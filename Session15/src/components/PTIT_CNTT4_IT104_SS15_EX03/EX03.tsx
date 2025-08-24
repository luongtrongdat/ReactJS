import React, { Component } from 'react'
type State = {
    date: string,
    submit: boolean,
}
export default class EX03 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            date: " ",
            submit: false,
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: e.target.value });
        this.setState({ submit: false });
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submit: true});
    }
  render() {
    return (
      <div>
        <h5>Ngày sinh: {this.state.submit ? this.state.date : ""} </h5>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="date" onChange={this.handleChange} />
            <br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
