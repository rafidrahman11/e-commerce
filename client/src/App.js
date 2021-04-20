import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ProductCreate from "./components/Shop/ProductCreate";

function App() {
  return (
    <div>
      <Router>
        {/* Navbar */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/create" component={ProductCreate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
