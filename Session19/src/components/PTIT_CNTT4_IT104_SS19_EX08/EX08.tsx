import React, { useReducer, useState } from "react";

type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

type Action =
  | { type: "SUBMIT" }
  | { type: "SUCCESS" }
  | { type: "ERROR"; payload: string }
  | { type: "RESET" };

const initialState: State = {
  loading: false,
  success: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SUBMIT":
      return { loading: true, success: false, error: null };
    case "SUCCESS":
      return { loading: false, success: true, error: null };
    case "ERROR":
      return { loading: false, success: false, error: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function EX08() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
    setTimeout(() => {
      const u = username.trim();
      const p = password.trim();

      if (u === "admin" && p === "123456") {
        dispatch({ type: "SUCCESS" });
      } else {
        dispatch({ type: "ERROR", payload: "Tên đăng nhập hoặc mật khẩu sai." });
      }
    }, 1200);
  };

  const box: React.CSSProperties = {
    maxWidth: 380,
    margin: "28px auto",
    padding: 24,
    borderRadius: 14,
    background: "#f6f7f9",
    fontFamily: "system-ui, sans-serif",
  };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "10px 3px",
    borderRadius: 8,
    border: "1px solid #333",
    background: "#2b2b2b",
    color: "#ffffffff",
    outline: "none",
  };

  return (
    <div style={box}>
      <h2 style={{ marginTop: 0 ,color:"black" }}>👤 Đăng nhập</h2>

      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: 8 ,color:"black"}}>
          Tên người dùng
        </label>
        <input
          style={input}
          placeholder="Nhập tên..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={state.loading}
        />

        <label style={{ display: "block", margin: "14px 0 8px",color:"black" }}>
          Mật khẩu
        </label>
        <input
          style={input}
          placeholder="Nhập mật khẩu..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={state.loading}
        />

        <button
          type="submit"
          disabled={state.loading}
          style={{
            width: "100%",
            marginTop: 16,
            padding: "12px 14px",
            borderRadius: 10,
            border: "none",
            background: state.loading ? "#6aa3ff" : "#1677ff",
            color: "#fff",
            fontWeight: 700,
            cursor: state.loading ? "not-allowed" : "pointer",
          }}
        >
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {/* Trạng thái */}
      <div style={{ minHeight: 28, marginTop: 12 }}>
        {state.loading && <span>⏳ Đang đăng nhập...</span>}
        {state.success && (
          <span style={{ color: "green", fontWeight: 600 }}>
             Đăng nhập thành công!
          </span>
        )}
        {!!state.error && (
          <span style={{ color: "crimson", fontWeight: 600 }}>
             {state.error}
          </span>
        )}
      </div>

      {state.success && (
        <button
          onClick={() => {
            setUsername("");
            setPassword("");
            dispatch({ type: "RESET" });
          }}
          style={{
            marginTop: 8,
            background: "transparent",
            border: "none",
            color: "#1677ff",
            cursor: "pointer",
          }}
        >
          Đăng nhập lại
        </button>
      )}
    </div>
  );
}