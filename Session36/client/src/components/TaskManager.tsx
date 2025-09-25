import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { addTask, check, deleteTask, getAllTask, updateTask } from "../store/slices/taskSlice";
import type { Task } from "../utils/types";

export default function TaskManager() {
  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<string>("Thấp");
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [search,setSearch]=useState<string>("")
  const result = useSelector((data: any) => data.task.tasks);
  const dispatch: any = useDispatch();
  
  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  const handleDele = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleCheck = (item: Task) => {
    const newTask = { ...item, completed: !item.completed };
    dispatch(check(newTask));
  };

  const handleAdd = () => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 999999),
      taskName: name,
      completed: false,
      priority: priority,
    };
    dispatch(addTask(newTask));
    alert("Thêm công việc thành công");
    setName("");
  };

  const handleEdit = (task: Task) => {
    setEditTask(task);
    setName(task.taskName);
    setPriority(task.priority);
  };

  const handleUpdate = () => {
    if (editTask) {
      const updatedTask = { ...editTask, taskName: name, priority: priority };
      dispatch(updateTask(updatedTask));
      alert("Cập nhật thành công!");
      setEditTask(null);
      setName("");
    }
  };
const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
         setSearch(e.target.value)
}
 const filteredTasks = result.filter((item: Task) =>
    item.taskName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[600px] bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Tiêu đề */}
        <h1 className="text-xl font-bold text-center flex items-center justify-center gap-2">
          <span>📑</span> Task Manager
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Công việc mới"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleName}
            value={name}
          />
          <select
            className="border rounded-lg px-3 py-2"
            onChange={handlePriority}
            value={priority}
          >
            <option value="Thấp">Thấp</option>
            <option value="Trung bình">Trung bình</option>
            <option value="Cao">Cao</option>
          </select>

          {editTask ? (
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              onClick={handleUpdate}
            >
              SỬA
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleAdd}
            >
              THÊM
            </button>
          )}
        </div>
         <div> <input
            type="text"
            placeholder="Tìm kiếm"
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={search}
          /></div>
        {/* Danh sách công việc */}
        <div className="space-y-3">
          {filteredTasks.map((item: Task) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheck(item)}
                />
                <span
                  className={item.completed ? "line-through text-gray-500" : ""}
                >
                  {item.taskName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-white text-xs px-2 py-1 rounded ${
                    item.priority === "Cao"
                      ? "bg-red-500"
                      : item.priority === "Trung bình"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                >
                  {item.priority}
                </span>
                <button
                  onClick={() => handleDele(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑
                </button>
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  ✏
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}