import axios from "axios";
import React, { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  email: string;
};

export default function Ex03_4_5_6() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function getData() {
    let res = await axios.get("http://localhost:8080/students");
    setStudents(res.data);
  }

  async function addNewStudent(student: any) {
    await axios.post("http://localhost:8080/students", student);
    getData(); 
  }

  const addStudent = () => {
    if (!name.trim() || !email.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    addNewStudent({ name, email });
    setName("");
    setEmail("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Quản lý Sinh Viên</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Tên sinh viên"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <button onClick={addStudent}>Thêm sinh viên</button>
      <ul>
        {students.map((items ,index) => (
          <li key={index}>
            {items.name} - {items.email}
          </li>
        ))}
      </ul>
    </div>
  );
}