import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import Action from './composant/action.jsx';
import { createBrowserRouter, RouterProvider,Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/action",
    element: <Action />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
