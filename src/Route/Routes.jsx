import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import LayOut from "../LayOut/LayOut";
import SignUp from "../pages/Signup/SignUp";
import LogIn from "../pages/Login/LogIn";
import AddTask from "../pages/AddTask/AddTask";





export const router = createBrowserRouter([
      {
        path: "/",
        element: <LayOut></LayOut>,
        children:[
            {
                  path: "/",
                  element: <Home></Home>
            },
            {
                  path: '/login',
                  element: <LogIn></LogIn>
            },
            {
                  path: '/signup',
                  element: <SignUp></SignUp>
            },
            {
                  path: '/addedtask',
                  element: <AddTask></AddTask>
            },
        ]
      },
    ]);