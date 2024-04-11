import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Popular from './components/Popular'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SearchFilter from './components/SearchFilter'
import Account from './components/Account'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <ProtectedRoute exact path="/search" component={SearchFilter} />
      <ProtectedRoute exact path="/not-found" component={NotFound} />
      <ProtectedRoute exact path="/account" component={Account} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
