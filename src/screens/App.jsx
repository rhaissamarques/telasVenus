import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeVenusDark } from "./HomeVenusDark/HomeVenusDark.jsx";
import { AlambradoDark } from "./AlambradoDark/AlambradoDark.jsx";
import { OnduladaDark } from "./OnduladaDark/OnduladaDark.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeVenusDark />
  },
  {
    path: "/alambrado-dark",
    element: <AlambradoDark />
  },
  {
    path: "/ondulada-dark",
    element: <OnduladaDark />
  }
])

export function App() {
  return <RouterProvider router={router} />
}