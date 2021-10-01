import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router> 
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch> 
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/users">
              <UserList/>
            </Route>
            <Route exact path="/user/:UserId">
              <User/>
            </Route>
            <Route exact path="/newUser">
              <NewUser/>
            </Route>
            <Route exact path="/products">
              <ProductList/>
            </Route>
            <Route exact path="/product/:ProductId">
              <Product/>
            </Route>
            <Route exact path="/newProduct">
              <NewProduct/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;