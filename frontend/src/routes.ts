import ReservatoriosDeAgua from "./pages/ReservatoriosDeAgua"
import Inicio from "./pages/Inicio"
import GeradoresDeEnergia from "./pages/GeradoresDeEnergia"
import NoticiasLocais from "./pages/NoticiasLocais"
import SobreProjeto from "./pages/SobreProjeto"

const routes = [
  {
    path: "/",
    component: Inicio,
    routes: [],
    defaultProps: {}
  },
  {
    path: "/reservatorios",
    component: ReservatoriosDeAgua,
    routes: [],
    defaultProps: {}
  },
  {
    path: "/energia",
    component: GeradoresDeEnergia,
    routes: [],
    defaultProps: {}
  },
  {
    path: "/noticias",
    component: NoticiasLocais,
    routes: [],
    defaultProps: {}
  },
  {
    path: "/projeto",
    component: SobreProjeto,
    routes: [],
    defaultProps: {}
  },
  /*
  {
    path: "/reservatorios",
    component: ReservatoriosDeAgua,
    routes: [
      {
        path: "/reservatorios/norte",
        component: ReservatoriosDeAgua
      },
      {
        path: "/reservatorios/sul",
        component: ReservatoriosDeAgua
      }
    ]
  }
  */
]

export default routes