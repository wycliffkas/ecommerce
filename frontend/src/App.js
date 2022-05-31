import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="pay" element={<Pay />} />
			<Route path="success" element={<Success />} />
			<Route path="products/:category" element={<ProductList />} />
			<Route path="product/:id" element={<Product />} />
			<Route path="cart" element={<Cart />} />
			<Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
			<Route path="register" element={<Register />} />
		</Routes>
	);
}

export default App;
