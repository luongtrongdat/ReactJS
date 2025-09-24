import { configureStore } from "@reduxjs/toolkit";
import Counter from "../components/Counter";
import RanDom from "../components/Random";
import Dark from "../components/Dark";
import ListMode from "../components/ListMode";
import Language from "../components/Language";
import Favorites from "../components/Favorites";
import Menu from "../components/Menu";
import StudentManager from "../components/StudentManager";

export const store = configureStore({
    reducer:{
        Counter,
        StudentManager,
        RanDom,
        Dark,
        ListMode,
        Menu,
        Language,
        Favorites
        
    }

})