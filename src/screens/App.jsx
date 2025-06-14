import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeVenusDark } from "./HomeVenusDark/HomeVenusDark.jsx";
import { AlambradoDark } from "./AlambradoDark/AlambradoDark.jsx";
import { OnduladaDark } from "./OnduladaDark/OnduladaDark.jsx";
import { PinteiroDark } from "./PinteiroDark/PinteiroDark.jsx";
import { GalinheiroDark } from "./GalinheiroDark/GalinheiroDark.jsx";
import { ViveiroDark } from "./ViveiroDark/ViveiroDark.jsx"
import { MosquiteiroDark } from "./MosquiteiroDark/MosquiteiroDark.jsx";
import { EstuqueDark } from "./EstuqueDark/EstuqueDark.jsx";
import { FachadeiroDark } from "./FachadeiroDark/FachadeiroDark.jsx";


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
  },
  {
    path: "/viveiro-dark",
    element: <ViveiroDark />
  },
  {
    path: "/mosquiteiro-dark",
    element: <MosquiteiroDark />
  },
  {
    path: "/estuque-dark",
    element: <EstuqueDark />
  },
  {
    path: "/fachadeiro-dark",
    element: <FachadeiroDark />
  }
])

export function App() {
  return <RouterProvider router={router} />
}