import { useState } from 'react';
type Job = {
  id: number;
  title: string;
  status: boolean;
};
export default function EX09() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName === '') {
      alert('Nội dung công việc không được để trống');
      return;
    }
    const isExist = jobs.some((item) => item.title === taskName);
    if (isExist) {
      alert('Nội dung công việc đã tồn tại');
      return;
    }
    const newJob: Job = {
      id: new Date().getTime(),
      title: taskName,
      status: false,
    };
    setJobs([...jobs, newJob]);
    setTaskName('');
  };
  const handleDelete = (idDelete: number) => {
    const result = confirm('Bạn có chắc chắn muốn xóa hay không');
    if (result) {
      setJobs(jobs.filter((item) => item.id !== idDelete));
    }
  };
  const toggleStatus = (id: number) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status: !job.status } : job
      )
    );
  };
  function countCompletedJobs() {
  return jobs.filter(job => job.status).length;
}


  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: 40 }}>Quản lý công việc</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="form2"
          value={taskName}
          onChange={handleChange}
        />
        <button>Thêm</button>
      </form>
      <div>
        <ul>
          {jobs.map((item) => {
            return (
              <li
                key={item.id} 
                style={{ backgroundColor: '#f4f6f7' }}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => toggleStatus(item.id)}
                  />
                  {item.status ? (
                    <span style={{ textDecoration: 'line-through' }}>{item.title}</span>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  <button onClick={() => handleDelete(item.id)}>xóa</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
<p>công việc đã hoàn {countCompletedJobs()} / {jobs.length}</p>

    </div>
  );
}