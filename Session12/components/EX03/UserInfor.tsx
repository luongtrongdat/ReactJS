import React from "react";

class User {
  fullName: string;
  gender: string;
  ngaysinh: string;
  email: string;
  address: string;
  constructor(
    fullName: string,
    gender: string,
    ngaysinh: string,
    email: string,
    address: string
  ) {
    this.fullName = fullName;
    this.gender = gender;
    this.ngaysinh = ngaysinh;
    this.email = email;
    this.address = address;
  }
}

const UserInfor = () => {
  const newUser = new User(
    "Nguyễn Văn A",
    "Nam",
    "22/9/2020",
    "nva@gmail.com",
    "Thanh Xuân, Hà Nội"
  );
  return (
    <>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li key="fullname">{newUser.fullName}</li>
        <li key="gender">{newUser.gender}</li>
        <li key="ngaysinh">{newUser.ngaysinh}</li>
        <li key="email">{newUser.email}</li>
        <li key="address">{newUser.address}</li>
      </ul>
    </>
  );
};

export default UserInfor;