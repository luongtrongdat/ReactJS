import React, { Component } from 'react'
type State = {
    studentList : string[]
}
export default class SubjectList extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            studentList: ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        }
    }
  render() {
    return (
      <div>
        <h1>DANH SÁCH MÔN HỌC</h1>
        <div>
            {this.state.studentList.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    )
  }
}
