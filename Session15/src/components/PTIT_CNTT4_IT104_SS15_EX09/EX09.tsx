import React, { Component } from "react";

type Job = {
  id: number;
  name: string;
  completed: boolean;
};

type Jobs = {
  jobs: Job[];
  newName: string;
  isEdit: boolean;
  editId: number | null;
};

export default class EX09 extends Component<object, Jobs> {
  constructor(props: object) {
    super(props);
    this.state = {
      jobs: JSON.parse(localStorage.getItem("jobs") || "[]"),
      newName: "",
      isEdit: false,
      editId: null,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { jobs, newName, isEdit, editId } = this.state;


    if (isEdit && editId !== null) {
 
      const updateJobs = jobs.map((job) =>
        job.id === editId ? { ...job, name: newName } : job
      );
      this.setState({ jobs: updateJobs, newName: "", isEdit: false, editId: null });
      localStorage.setItem("jobs", JSON.stringify(updateJobs));
    } else {
      const newId = jobs.length === 0 ? 1 : jobs[jobs.length - 1].id + 1;
      const jobNew: Job = { id: newId, name: newName, completed: false };
      const updateJobs = [...jobs, jobNew];
      this.setState({ jobs: updateJobs, newName: "" });
      localStorage.setItem("jobs", JSON.stringify(updateJobs));
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newName: e.target.value });
  };

  handleEdit = (id: number) => {
    const edit = this.state.jobs.find((e) => e.id === id);
    if (edit) {
      this.setState({
        newName: edit.name,
        isEdit: true,
        editId: id,
      });
    }
  };

  handleDelete = (id: number) => {
    const updateJobs = this.state.jobs.filter((job) => job.id !== id);
    this.setState({ jobs: updateJobs });
    localStorage.setItem("jobs", JSON.stringify(updateJobs));
  };

  handleToggle = (id: number) => {
    const updateJobs = this.state.jobs.map((job) =>
      job.id === id ? { ...job, completed: !job.completed } : job
    );
    this.setState({ jobs: updateJobs });
    localStorage.setItem("jobs", JSON.stringify(updateJobs));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Danh sách công việc</h3>
          <input
            type="text"
            placeholder="Thêm công việc mới"
            value={this.state.newName}
            onChange={this.handleChange}
          />
          <button>{this.state.isEdit ? "Cập nhật" : "Thêm"}</button>
        </form>

        <ul>
          {this.state.jobs.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => this.handleToggle(item.id)}
              />
              {item.completed ? (
                <span style={{ textDecoration: "line-through" }}>{item.name}</span>
              ) : (
                <span>{item.name}</span>
              )}
              <button onClick={() => this.handleEdit(item.id)}>Sửa</button>
              <button onClick={() => this.handleDelete(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>

        <p>
          Hoàn thành {this.state.jobs.filter((job) => job.completed).length} /{" "}
          {this.state.jobs.length}
        </p>
      </div>
    );
  }
}