import "./bootstrap";

import ReactDOM from "react-dom/client";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

//Layouts
import RootLayout from "./Layouts/RootLayout";

// Pages
import Home from "./Pages/Home";
import Book from "./Pages/Book";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="book" element={<Book />} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Route>
    )
);
ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={Router} />
);
