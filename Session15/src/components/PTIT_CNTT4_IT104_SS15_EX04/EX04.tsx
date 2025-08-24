import React, { Component } from 'react'
type State = {
    range: number,
    submit: boolean,
}
export default class EX04 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            range: 0,
            submit: false,
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ range: Number(e.target.value) });
        this.setState({ submit: false });
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({submit: true});
    }
    render() {
        return (
            <div>
                <h1>Tiến độ hoàn thành: {this.state.submit ? this.state.range : ""}%</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="range" onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
