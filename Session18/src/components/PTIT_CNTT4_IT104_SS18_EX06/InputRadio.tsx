import React, { useReducer } from "react";

type Gender = "Nam" | "Nu" | "Khac";
type State = { gender: Gender };
type Action = { type: "SET_GENDER"; payload: Gender };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
}
const OPTIONS: Gender[] = ["Nam", "Nu", "Khac"];
export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_GENDER", payload: e.target.value as Gender });
  };
  return (
    <div style={{ fontSize: 20 }}>
      {OPTIONS.map((opt) => (
        <label key={opt} style={{ display: "block", marginBottom: 8 }}>
          <input
            type="radio"
            name="gender"
            value={opt}
            checked={state.gender === opt}
            onChange={handleChange}
          />{" "}
          {opt}
        </label>
      ))}

      <h2>Selected gender: {state.gender}</h2>
    </div>
  );
}