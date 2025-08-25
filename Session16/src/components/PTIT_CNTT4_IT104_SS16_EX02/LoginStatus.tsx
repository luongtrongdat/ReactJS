import React, { Component } from 'react'
type State = {
    isLoggedIn: boolean
}
export default class LoginStatus extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
  render() {
    return (
      <div>
        <h3>{this.state.isLoggedIn ? "Xin chào User!" : "Vui lòng đăng nhập để tiếp tục"}</h3>
        <button onClick={() => this.setState({isLoggedIn: !this.state.isLoggedIn})}>
            {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    )
  }
}
