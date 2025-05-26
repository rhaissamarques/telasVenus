import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeVenusDark } from "./HomeVenusDark/HomeVenusDark.jsx";
import { AlambradoDark } from "./AlambradoDark/AlambradoDark.jsx";
import { OnduladaDark } from "./OnduladaDark/OnduladaDark.jsx";
import { PinteiroDark } from "./PinteiroDark/PinteiroDark.jsx";


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
  },
  {
    path: "/pinteiro-dark",
    element: <PinteiroDark />
  }
])

export function App() {
  return <RouterProvider router={router} />
}