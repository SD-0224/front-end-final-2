import { Route, Routes, Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import About from "./pages/About/About";
import { CategoriesProvider } from "./context/CategoriesContext";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/Signup/Signup";
import WishlistContextProvider from "./context/WishlistContext";
import MyCart from "./pages/MyCart/MyCart";
import ProductsList from "./pages/ProductsList/ProductsList";

import { CartProvider } from "./context/CartContext";
import { AuthenticatedUserProvider } from "./context/AuthenticatedUserContext";
import UserPopupContextProvider from "./context/UserPopupContext";

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <UserPopupContextProvider>
        <CategoriesProvider>
          <WishlistContextProvider>
            <CartProvider>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="/category/:slug"
                  element={
                    <Layout>
                      <Category />
                    </Layout>
                  }
                />
                <Route
                  path="/products/:slug"
                  element={
                    <Layout>
                      <ProductDetails />
                    </Layout>
                  }
                />

                <Route
                  path="/products/list"
                  element={
                    <Layout>
                      <ProductsList />
                    </Layout>
                  }
                >
                  <Route path="brand/:slug" element={<Outlet />} />
                  <Route path="newest" element={<Outlet />} />
                  <Route path="handpicked/:slug" element={<Outlet />} />
                  <Route path="trendy" element={<Outlet />} />
                  <Route path="discount" element={<Outlet />} />

                  <Route path="limited" element={<Outlet />} />
                </Route>
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <About />
                    </Layout>
                  }
                />
                <Route
                  path="/mycart"
                  element={
                    <Layout>
                      <MyCart />
                    </Layout>
                  }
                />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<SignUp />} />
              </Routes>
            </CartProvider>
          </WishlistContextProvider>
        </CategoriesProvider>
      </UserPopupContextProvider>
    </AuthenticatedUserProvider>
  );
}
