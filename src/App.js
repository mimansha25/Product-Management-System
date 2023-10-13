import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductDataTable from "./components/ProductDataTable";
import AddProduct from "./components/AddProduct";
import ProductForm from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <h1>Product Crud </h1>

      <Routes>
        <Route path="/" element={<ProductDataTable />}></Route>
        <Route path="/create" element={<AddProduct />}></Route>
        <Route path="/edit/:id" element={<ProductForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
