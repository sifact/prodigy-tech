import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/courses", element: <Courses /> },
            { path: "/faq", element: <FAQ /> },
            { path: "/blog", element: <Blog /> },
        ],
    },
]);
