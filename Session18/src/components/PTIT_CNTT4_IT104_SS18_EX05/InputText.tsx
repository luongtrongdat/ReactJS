import React, { useReducer } from "react";
type State = {
  text: string;
};
type Action = {
  type: "SET_TEXT";
  payload: string;
};
function inputReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
}
export default function InputText() {
  const [state, dispatch] = useReducer(inputReducer, { text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Input change</h1>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
      />
      <h2>{state.text}</h2>
    </div>
  );
}