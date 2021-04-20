import 'fontsource-roboto'
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom'
import AdminEntry from './admin/pages/Entry'
import AdminAuthProvider from './context/admin/AuthProvider'
import HandymanAuthProvider from './context/handyman/AuthProvider'
import AuthProvider from './context/home/AuthProvider'
import Entry from './handyman/pages/Entry'
import Home from './pages/Home'

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <AuthProvider>
              <Home />
            </AuthProvider>
          </Route>
          <Route path='/handyman'>
            <HandymanAuthProvider>
              <Entry />
            </HandymanAuthProvider>
          </Route>
          <Route path='/admin'>
            <AdminAuthProvider>
              <AdminEntry />
            </AdminAuthProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
