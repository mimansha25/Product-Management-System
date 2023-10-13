import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ProductDataTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const baseURL = "http://localhost:8097/api/v1";

  useEffect(() => {
    setProductData();
  }, []);

  const setProductData = () => {
    axios.get(baseURL + "/product").then((response) => {
      setProducts(response.data);
    });
  };

  const removeProduct = (id) => {
    axios
      .delete(baseURL + "/product/" + id)
      .then((response) => {
        setProductData();
        navigate("/");
      })
      .catch((error) => {
        alert("Error Ocurred in removeEmployee:" + error);
      });
  };

  return (
    <div className="col-md-6">
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}
        >
          Create New Product
        </button>
      </nav>
      <Link to="/create">Add product</Link>
      <hr></hr>
      <h5>Show All Products</h5>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product, index) => (
                    <tr>
                      <th scope="row">{product.id}</th>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            removeProduct(product.id);
                          }}
                          className="btn btn-primary"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataTable;
