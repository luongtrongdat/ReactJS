import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};
export default function UserList() {
  const users: User[] = [
    { id: 1, name: "dat", age: 16 },
    { id: 2, name: "DaT", age: 17 },
    { id: 3, name: "Dat", age: 18 },
    { id: 4, name: "DAT", age: 17 },
    { id: 5, name: "dAt", age: 17 },
  ];

  const filteredUsers = useMemo(() => {
    console.log("Đang tính toán danh sách người tình");
    return users.filter((u) => u.age > 16);
  }, [users]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách người dùng trên 16 tuổi</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}