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
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SingleCar from "../../Pages/AllCars/SingleCar/SingleCar";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <DisplayError></DisplayError>,
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
                loader: async({params}) => fetch(`https://car-seller-server.vercel.app/category/${params.id}`),
                element: <AllCars></AllCars>
            },
            {
                path: '/product/:id',
                loader: async({params}) => fetch(`https://car-seller-server.vercel.app/product/${params.id}`),
                element: <SingleCar></SingleCar>
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <DisplayError></DisplayError>,
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                loader: async({params})=> fetch(`https://car-seller-server.vercel.app/orders/${params.id}`),
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
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