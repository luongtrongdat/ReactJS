import React, { useState, type ChangeEvent } from 'react'
import './app.scss'
type Payment={
  id: number,
  name: string,
  price: number,
  status: boolean,
}
export default function App() {
  const [datas, setDatas]= useState<Payment[]>([]);
  const [data, setDate]= useState<Payment>({
    id: 1,
    name: '',
    price: 0,
    status: false,
  });
  const handlesubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDatas([...datas, {...data, id: datas.length? datas[datas.length -1].id + 1 : 1}]);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setDate({
      ...data,
      [name]: value
    });
  }
  console.log("Mảng danh sách các hóa đơn:", datas);
  
  return (
    <div className='container'>
      <div className="title">
        <h1>⚡Quản lý hóa dơn tiền điện</h1>
      </div>
      <form action="" onSubmit={handlesubmit}>
        <h2>form nhập dữ liệu</h2>
        <input placeholder='Nhập tên chủ hộ' 
        onChange={handleChange}
        type="text" 
        name='name'
        />
        <input placeholder='giá tiền' 
        onChange={handleChange}
        type="text" />
        <button>Thêm</button>
      </form>
      <table>bảng hiện thị kết quả
        <thead>
          <tr>
            <th>Tên chủ hộ</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item: Payment, index:number) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.status ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <ul className='pagination'>
        <li>Phần phân trang</li>
      </ul>
    </div>
  )
}
