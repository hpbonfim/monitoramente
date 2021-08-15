import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import routes from './routes'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router >
        <Switch>
          {routes.map((route, i) => (
            <Route
              exact
              key={i}
              path={route.path}
              render={(props) =>
                // pass the sub-routes down to keep nesting: 
                <route.component {...props} defaultProps={route.defaultProps} routes={route.routes} />
              }
            />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
