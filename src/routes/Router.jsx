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
import MyToys from "../MyToys/MyToys";
import ErrorPage from "../ErroePage/ErrorPage";
import UpdateToy from "../UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/toy/:id',
                element: <PrivateRoutes> <AllToysDetails></AllToysDetails> </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5173/toy/${params.id}`)
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>,
                loader: () => fetch('http://localhost:5000/addAToy')
            },
            {
                path: '/update/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/addAToy/${params.id}`)
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