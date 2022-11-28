import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddedProduct from "../Pages/Dashboard/AddedProduct/AddedProduct";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../Pages/Dashboard/Payment/Payment";
// import MyaddedProduct from "../Pages/Dashboard/myAddedProduct/myAddedProduct";
// import MyaddedProduct from "../Pages/Dashboard/myAddedProduct/myAddedProduct";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";

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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <SingleCategory></SingleCategory>,
                loader:({ params }) =>
                fetch(`http://localhost:5000/category/${params.id}`)
            },
           

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<AddedProduct></AddedProduct>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/addproducts',
                element:<AdminRoute><AddProducts></AddProducts></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
   
    
])


export default router;