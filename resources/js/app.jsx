import "./bootstrap";

import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

//Layouts
import RootLayout from "./Layouts/RootLayout";
import AdminLayout from "./Layouts/AdminLayout";

// Pages
import Home from "./Pages/Root/Home";
import Book from "./Pages/Root/Book";
import Dashboard from "./Pages/Admin/Dashboard";
import BookAdmin from "./Pages/Admin/Book";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="book" element={<Book />} />
                <Route path="about" element={<h1>About</h1>} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="book" element={<BookAdmin />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
        </>
    )
);
ReactDOM.createRoot(document.getElementById("app")).render(
    <RouterProvider router={Router} />
);
