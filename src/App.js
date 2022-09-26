import { Route, Switch } from "react-router-dom";
import CartPage from "./Pages/Cart";
import CheckoutPage from "./Pages/Checkout";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/Profile";
import SignupPage from "./Pages/SignupPage";
import AuthProvider from "./Provider/AuthProvider";
import CartProvider from "./Provider/cartProvider";
import ProductProvider from "./Provider/ProductProvider";

const App = () => {
  return (
    <>
      <div className="px-1 container mx-auto bg-slate-50">
        <ProductProvider>
          <AuthProvider>
            <CartProvider>
              <Switch>
                <Route path="/cart" component={CartPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </CartProvider>
          </AuthProvider>
        </ProductProvider>
      </div>
    </>
  );
};

export default App;
