import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Login from "./pages/Login"; // Ensure Profile is imported
import { Toaster } from "sonner";
import Home from "./pages/home";
import Register from "./pages/Register";
import Profile from './pages/Profile';
import CollectionPage from "./pages/CollectionPage";
import CheckOut from "./components/Cart/Checkout";
import ProductDetails from "./components/Products/ProductDetails";

import OrderConfirmationPage from "./pages/OrderConfirmationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          
          <Route path="/login" element={<Login />} /> 
          {/* Profile route */}
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />

        </Route>
        {/* Admin layout and routes can be added here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
