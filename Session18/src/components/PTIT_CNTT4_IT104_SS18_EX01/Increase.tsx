import { useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" };
const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
export default function Increase() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>
    </div>
  );
}