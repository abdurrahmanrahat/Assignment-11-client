import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import {
    createBrowserRouter,
} from "react-router-dom";
import ToyDetails from "../Pages/Home/ToysCategory/ToyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToyDe from "../Pages/AllToys/SingleToyDe";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";

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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-six-lovat.vercel.app/toys/${params.id}`)
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
                path: '/addatoy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://assignment-11-server-six-lovat.vercel.app/addToys')
            },
            {
                path: '/alltoys/:id',
                element: <PrivateRoute><SingleToyDe></SingleToyDe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-six-lovat.vercel.app/addToys/${params.id}`)
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/mytoys/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://assignment-11-server-six-lovat.vercel.app/specificToys/${params.id}`)
            }
        ]
    }
])

export default router;