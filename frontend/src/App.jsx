import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Home from "./pages/home";
import Register from "./pages/Register";
import Profile from './pages/Profile';
import CollectionPage from "./pages/CollectionPage";
import CheckOut from "./components/Cart/Checkout";
import ProductDetails from "./components/Products/ProductDetails";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import OrderManagement from "./components/Admin/OrderManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="order/:orderId" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrderPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} /> 
          <Route path="users" element={<UserManagement />} />
          <Route path="orders" element={<OrderManagement />} />

          <Route path="products" element={<ProductManagement />} />
           <Route path="products/:id/Edit" element={<EditProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
