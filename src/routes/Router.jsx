import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Login from "../Login/Login";
import Register from "../Registration/Register";
import AllToys from "../AllToys/AllToys";
import AddAToy from "../AddAToy/AddAToy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'addAtoy',
                element: <AddAToy></AddAToy>
            }
        ]
    }
])

export default router;