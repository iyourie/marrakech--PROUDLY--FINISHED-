import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Book from './components/Booking/List/Book/Book'
import List1 from './components/Booking/List/List1/List1';

import './i18n';
import 'leaflet/dist/leaflet.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/book",
        element: <Book />,
    },
    {
        path: "/List1",
        element: <List1 />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);