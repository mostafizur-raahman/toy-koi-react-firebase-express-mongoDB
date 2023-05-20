import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Main/Main";
import Login from "../Login/Login";
import Register from "../Registration/Register";
import AllToys from "../AllToys/AllToys";
import AddAToy from "../AddAToy/AddAToy";
import Blog from "../Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import AllToysDetails from "../AllToysdetails/AllToysDetails";


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
                path: '/allToys/:id',
                element: <PrivateRoutes> <AllToysDetails></AllToysDetails> </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5173/allToys/${params.id}`)
            },
            {
                path: 'addAtoy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;