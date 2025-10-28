import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";

function App() {
    return (
        <Router>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Products />} />

                <Route path="/products/:id" element={<ProductDetails />} />

                <Route path="/add-product" element={<AddProduct />} />

                <Route path="/edit-product/:id" element={<EditProduct />} />
            </Routes>
        </Router>
    );
}

export default App;
