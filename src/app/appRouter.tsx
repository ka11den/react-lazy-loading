import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";
import { MainPage } from "../pages/MainPage";

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      }
    ],
  },
])