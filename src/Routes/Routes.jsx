import {
	createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Registration/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/Home/Home/Instructors/Instructors";
import Classes from "../pages/Home/Home/Classes/Classes";
import Dashboard from "../pages/Home/Home/Dashboard/Dashboard ";
import MyClass from "../pages/Home/Home/Dashboard/MyClass/MyClass";
import EnrolledClass from "../pages/Home/Home/Dashboard/EnrolledClass/EnrolledClass";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../pages/AllUser/AllUser";
import AddClass from "../pages/AddClass/AddClass";
import AllClass from "../pages/AllClass/AllClass";
import AdminRoute from "./AdminRoute";
import InstructorClass from "../pages/InstructorClass/InstructorClass";
import Payment from "../pages/Payment/Payment";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement:<ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element:<Home></Home>
			},
			{
				path: "/login",
				element:<Login></Login>
			},
			{
				path: "/register",
				element:<Register></Register>
			},
			{
				path: "/instructors",
				element:<Instructors></Instructors>
			},
			{
				path: "/classes",
				element:<Classes></Classes>
			}
		]
	},
	{
		path: "dashboard",
		element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
		children: [
			{
				path: 'myClass',
				element: <MyClass></MyClass>
				
			},
			
			{
				path: 'enrollClass',
				element:<EnrolledClass></EnrolledClass>
				
			},
			{
				path: 'allUser',
				element: <AdminRoute><AllUser></AllUser></AdminRoute>
				
			},
			{
				path: 'addClass',
				element:<AddClass></AddClass>
				
			},
			{
				path: 'enrollClass',
				element:<EnrolledClass></EnrolledClass>
				
			},
			{
				path: 'allClass',
				element: <AdminRoute><AllClass></AllClass></AdminRoute>,
				
			},
			{
				path: "instructorClass",
				element: <InstructorClass></InstructorClass>,
			},
			{
				path: "payment",
				element:<Payment></Payment>
			}
		]
		
	}
]);