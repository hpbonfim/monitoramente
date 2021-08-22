import TestPage from "./pages/ReservatoriosDeAgua/show"
import ReservatoriosDeAgua from "./pages/ReservatoriosDeAgua"
import Inicio from "./pages/Inicio"

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
    defaultProps: {
      search: 'reservatorios'
    }
  },
  {
    path: "/buscar",
    component: TestPage,
    routes: [],
    defaultProps: {
      search: ''
    }
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