import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ErrorPage from "./error-page";
import TicketManagementPage from './routes/adminTicket';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TicketCreationPage from './routes/createTicket';
import About from './routes/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ticket-gestion/:ticketId",
    element: <TicketManagementPage />,
  },
  {
    path: "/create/ticket",
    element: <TicketCreationPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
