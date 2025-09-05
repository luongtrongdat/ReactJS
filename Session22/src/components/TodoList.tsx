import React, { useState, useEffect } from "react";
import { Input, Button, List, Checkbox, Space, Typography, Modal, message,Switch } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Code a todo list",completed:true },
    { id: 2, text: "Learn React Typescript",completed:false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo.trim()) {
      message.warning("Nhiem vu ko dc de trong");
      return;
    }
    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const openEditModal = (todo: Todo) => {
    setEditingTodo(todo);
    setEditingText(todo.text);
    setIsModalVisible(true);
  };

  const handleUpdate = () => {
    if (editingTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: editingText } : todo
        )
      );
      setIsModalVisible(false);
      setEditingTodo(null);
      message.success("Cap nhat thanh cong");
    }
  };
  return (
    <div style={{ minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        background: "#ed6666",
        borderRadius:8,
        boxShadow:"10px 10px  0px 0px #888888"}}>
      <h1 style={{color:"#ffffffff"}}>Todo List</h1>
      <p style={{marginBottom:30,color:"#ffffffff"}}>Get things done, one item at a time</p>
      <Space.Compact style={{ width: "100%", marginBottom: 20 }}>
        <Input
          placeholder="Add to the todo list"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onPressEnter={addTodo}
        />
        <Button type="primary" onClick={addTodo}>
          Add Item
        </Button>
      </Space.Compact>

      <List
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button
                icon={<EditOutlined />}
                onClick={() => openEditModal(todo)}
              />,
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => deleteTodo(todo.id)}
              />,
            ]}
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            >
              <Text delete={todo.completed}>{todo.text}</Text>
            </Checkbox>
          </List.Item>
        )}
      />
            <div> 
      <p style={{color:"#ffffffff",justifyContent:"flex-end",display:"flex",marginTop:16}}>Move done iteam at the end? <Switch autoFocus onChange={onChange} /></p>
      </div>
       

      <Modal
        title="Cập nhật Todo"
        open={isModalVisible}
        onOk={handleUpdate}
        onCancel={() => setIsModalVisible(false)}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Input
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default App;