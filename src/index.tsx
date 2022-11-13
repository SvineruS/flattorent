import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {flats} from "./flats";
import {Root, FlatList, Flat, Rules} from './flattorent';

const router = createBrowserRouter([
  // todo dynamic title?
    {
        path: "/",
        element: <Root/>,
        errorElement: <Navigate to={"/"}/>,
        children: [
            { index: true, element: <FlatList /> },
            {
                path: "flat/:flatId",
                element: <Flat/>,
                loader: ({params}) => ({flat: flats[+(params?.flatId || 0)]})
            },
            {
                path: "rules",
                element: <Rules/>,
            },
        ]
    },
    {path: "*", element: <Navigate to={"/"}/>}


]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

