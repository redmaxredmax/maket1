import { nanoid } from "@reduxjs/toolkit";
import { Home } from "../pages/home";
import {Category} from "../pages/category"

export default [
    {
        component: <Home />,
        id: nanoid(),
    },
    {
        component:<Category/>,
        id:nanoid(),
        path:"category/:id"
    }
]