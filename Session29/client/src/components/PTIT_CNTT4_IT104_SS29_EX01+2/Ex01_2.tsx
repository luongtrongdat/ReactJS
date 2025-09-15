import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Product = {
  id: number,
  product_name: string,
  image: string,
  price: string,
  quantity: number,
  created_at: string
}

export default function Ex01_2() {
  const [post, setPost] = useState<Product[]>([]);

  async function getData() {
    let res = await axios.get("http://localhost:8080/products")
    setPost(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3>Danh sách sản phẩm là:</h3>
      <ul>
        {post.map((item, index) => (
          <li key={item.id}>
           id : {item.id} , tên sp : {item.product_name} - giá : {item.price}đ 
           <br />
           số lượng : {item.quantity}, tạo ra ngày : {item.created_at}
          </li>
        ))}
      </ul>
    </div>
  )
}