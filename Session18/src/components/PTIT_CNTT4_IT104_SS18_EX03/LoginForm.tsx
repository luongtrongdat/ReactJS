import React,{useState, useCallback} from "react";

export default function LoginForm() {
  const [email,setEmail]=useState("");
  const [password, setPassword]=useState("");

  const handleSubmit = useCallback((e: React.FormEvent)=>{
      e.preventDefault();
      console.log ({email,password});
    },
    [email,password]
  );
  return (
     <form onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 250,
        margin: "20px auto",
        gap: "10px",
      }}
    >
      <label>Email:<input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>Password:<input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}