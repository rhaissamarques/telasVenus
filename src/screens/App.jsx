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
import { TelasDark } from "./TelasDark/TelasDark.jsx"
import { TapumeDark } from "./TapumeDark/TapumeDark.jsx"
import { PeneiraDark } from "./PeneiraDark/PeneiraDark.jsx";
import { ConcretoDark } from "./ConcretoDark/ConcretoDark.jsx";
import { SoldadaDark } from "./SoldadaDark/SoldadaDark.jsx";
import { MineracaoDark } from "./MineracaoDark/MineracaoDark.jsx";
import { AlvenariaDark } from "./AlvenariaDark/AlvenariaDark.jsx";
import { GradilDark } from "./GradilDark/GradilDark.jsx";

const router = createBrowserRouter([
  {
    path: "/telasVenus",
    element: <HomeVenusDark />
  },
  {
    path: "/telas-dark",
    element: <TelasDark />
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
  },
  {
    path: "/tapume-dark",
    element: <TapumeDark />
  },
  {
    path: "/peneira-dark",
    element: <PeneiraDark />
  },
  {
    path: "/concreto-dark",
    element: <ConcretoDark />
  },
  {
    path: "/soldada-dark",
    element: <SoldadaDark />
  },
  {
    path: "/mineracao-dark",
    element: <MineracaoDark />
  },
  {
    path: "/alvenaria-dark",
    element: <AlvenariaDark />
  },
  {
    path: "/gradil-dark",
    element: <GradilDark />
  }
])

export function App() {
  return <RouterProvider router={router} />
}