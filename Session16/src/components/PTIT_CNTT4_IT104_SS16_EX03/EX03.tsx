import React, { Component } from 'react'
import '../../App.css'
type Button = {
    text: string[],
}
export default class EX03 extends Component<{}, Button> {
    constructor(props: {}) {
        super(props)
        this.state = {
        text: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Info', 'Light', 'Dark'],
        }
    }
  render() {
    return (
      <div>
        {this.state.text.map((value, index) => (
            <button key={index} type="button" className={value}>{value}</button>
        ))}
        <a href="">link</a>
      </div>
    )
  }
}
