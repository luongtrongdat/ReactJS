import React, { Component } from "react";

type Account = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type StateTypes = {
  account: Account;
  isEmpty: boolean;
};

export default class EX07 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      account: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
      isEmpty: false,
    };
  }
  render() {
    const accountList: Account[] = JSON.parse(
      localStorage.getItem("accountList") || "[]"
    );
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault(); 
      const { name, value } = e.target; 

      this.setState({
        account: {
          ...this.state.account,
          [name]: value,
        },
        isEmpty: false,
      });
    };

    const { name, email, password, phone } = this.state.account;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubmit = () => {
      const existed =
        accountList.some((account: Account) => account.email === email) ||
        !regex.test(email);
      if (!name || existed || !password || !phone) {
        this.setState({
          isEmpty: true,
        });
      } else {
        this.setState({
          isEmpty: false,
        });
        const newAccount = this.state.account;

        console.log("newAccount: ", newAccount);
        accountList.push(newAccount);
        localStorage.setItem("accountList", JSON.stringify(accountList));

        this.setState({
          account: {
            name: "",
            email: "",
            password: "",
            phone: "",
          },
        });
      }
    };
    return (
      <div>
        <div
          style={{
            marginTop: "10px",
            border: "1px solid #dadada",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <h3>Đăng ký tài khoản</h3>
          <form>
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Tên sinh viên:{" "}
              </label>
              <br />
              <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
              />
            </div>
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Email:{" "}
              </label>
              <br />
              <input
                value={email}
                onChange={handleChange}
                type="email"
                name="email"
              />
            </div>
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Mật khẩu:{" "}
              </label>
              <br />
              <input
                value={password}
                onChange={handleChange}
                type="text"
                name="password"
              />
            </div>
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Số điện thoại:{" "}
              </label>
              <br />
              <input
                value={phone}
                onChange={handleChange}
                type="text"
                name="phone"
              />
            </div>
          </form>

          <div style={{ color: "red", fontSize: "12px" }}>
            {this.state.isEmpty
              ? "Dữ liệu không hợp lệ hoặc email đã tồn tại"
              : ""}
          </div>
          <button
            onClick={handleSubmit}
            style={{ width: "100%", backgroundColor: "blue", color: "#fff" }}
          >
            Đăng ký
          </button>
        </div>
      </div>
    );
  }
}