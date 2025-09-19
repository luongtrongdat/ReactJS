// component/PTIT_CNTT4_IT104_Session32_Exercises02/store/userReducer.ts

export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: User[] = [
  {
    id: 1,
    userName: "Trong",
    gender: "Nam",
    dateBirth: "11/11/2011",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Dat",
    gender: "Nữ",
    dateBirth: "12/12/2012",
    address: "hnoi",
  },
];

const reducerUser = (state = initialState, action: any): User[] => {
  switch (action.type) {
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    default:
      return state;
  }
};

export default reducerUser;