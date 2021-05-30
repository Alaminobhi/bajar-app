import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './pages/Products'
import OrderList from './pages/OrderList'
import ShopList from './pages/ShopList'
import { AuthProvider, PrivateRoute } from './lib/auth'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
        <Route path="/login" component={Login}/>
          <Route exact path="/" component={Products} />
          <PrivateRoute path="/shop" component={ShopList} />
          <PrivateRoute path="/order" component={OrderList} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
