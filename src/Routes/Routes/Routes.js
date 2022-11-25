import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import SignUp from "../../Pages/SignUp/SignUp";
import AllCars from "../../Pages/AllCars/AllCars";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                loader: async({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <AllCars></AllCars>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allbuyer',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allseller',
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: '*',
        element: <>
        <Navbar></Navbar>
        <ErrorPage></ErrorPage>
        </>
    }
])


export default router;