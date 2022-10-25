import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import { FAQ } from "../components/FAQ/FAQ";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/courses",
                element: <Courses />,
                loader: () => fetch("http://localhost:5000/courses"),
            },
            {
                path: "/course/:id",
                element: <CourseDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/courses/${params.id}`),
            },
            { path: "/faq", element: <FAQ /> },
            { path: "/blog", element: <Blog /> },
        ],
    },
]);
