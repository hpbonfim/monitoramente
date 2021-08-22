import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Header from './components/Header'
import routes from './routes'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router >
        <Switch>
          {routes.map((route: any, index: number) => (
            <Route
              exact
              key={index}
              path={route.path}
              render={(props: any) =>
                // pass the sub-routes down to keep nesting: 
                <route.component {...props} defaultProps={route.defaultProps} routes={route.routes} />
              }
            />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  )
}

export default App
