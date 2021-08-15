import ReservatoriosDeAgua from "./pages/ReservatoriosDeAgua"

const routes = [
  {
    path: "/",
    component: ReservatoriosDeAgua,
    routes: [],
    defaultProps: {
      search: ''
    }
  },
  {
    path: "/reservatorios",
    component: ReservatoriosDeAgua,
    routes: [],
    defaultProps: {
      search: 'reservatorios'
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