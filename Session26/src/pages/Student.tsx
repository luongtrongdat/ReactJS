import { useState, type ChangeEvent} from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Student() {
    const [studentName, setStudentName] = useState('');
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStudentName(e.target.value);
    }
    const [name, setSearchParamName] = useSearchParams();
    const handleClick =() => {
        // setSearchParamName truyền dữ liệu lên url
        setSearchParamName({name: studentName, age: '20'});
    }
  return (
    <div>
      Trang học sinh
      <br />
      <input type="text" placeholder='Nhập tên sinh viên' onChange={handleChange}/>
      <button onClick= {handleClick}>Tìm kiếm</button>
      <p>Giá trị vừa tìm kiếm: {name.get('name')}</p>
    </div>
  )
}
