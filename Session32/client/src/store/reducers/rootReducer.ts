import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudent } from "./ReducerStudent";
import { reducerProfile } from "./ReducerProfile";
import { reducerChange } from "./ReducerChange";
import { reducerDark } from "./ReducerDark";
import { reducerRandomNumber } from "./ReducerRandomNumber";
import { account } from "./ReducerRegister";
import reducerUser from "./ReducerUser";
import { login } from "./ReducerLogin";

export const rootReducer= combineReducers({
    counter: reducerCounter,
    students: reducerStudent,
    profile: reducerProfile,
    change: reducerChange,
    dark: reducerDark,
    random: reducerRandomNumber,
    login: login,
    register: account,
    listUser: reducerUser,
})