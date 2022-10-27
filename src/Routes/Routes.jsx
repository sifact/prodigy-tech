import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import { FAQ } from "../components/FAQ/FAQ";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Checkout from "../components/Checkout/Checkout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/courses",
                element: <Courses />,
                // loader: () => fetch("http://localhost:5000/courses"),
            },
            {
                path: "/course/:id",
                element: <CourseDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/courses/${params.id}`),
            },
            { path: "/faq", element: <FAQ /> },
            { path: "/blog", element: <Blog /> },
            {
                path: "/checkout/:id",
                element: (
                    <PrivateRoutes>
                        <Checkout />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/courses/${params.id}`),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/*",
        element: <h1 className="text-center">No page in this route</h1>,
    },
]);
