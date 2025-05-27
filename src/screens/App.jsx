import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeVenusDark } from "./HomeVenusDark/HomeVenusDark.jsx";
import { AlambradoDark } from "./AlambradoDark/AlambradoDark.jsx";
import { OnduladaDark } from "./OnduladaDark/OnduladaDark.jsx";
import { PinteiroDark } from "./PinteiroDark/PinteiroDark.jsx";
import { GalinheiroDark } from "./GalinheiroDark/GalinheiroDark.jsx";


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
  },
  {
    path: "/galinheiro-dark",
    element: <GalinheiroDark />
  }
])

export function App() {
  return <RouterProvider router={router} />
}