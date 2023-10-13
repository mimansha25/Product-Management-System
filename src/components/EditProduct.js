import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from "react-bootstrap";

const ProductForm = () => {
  const editURL = "http://localhost:8097/api/v1/product/";
  const navigate = useNavigate();
  const param = useParams();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get(editURL + param.id)
      .then((response) => {
        const productData = response.data;
        setId(productData.id);
        setName(productData.name);
        setCategory(productData.category);
        setPrice(productData.price);
      })
      .catch((error) => {
        alert("Error Ocurred getting Product detail:" + error);
      });
  }, []);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(editURL + param.id, {
        id: id,
        name: name,
        category: category,
        price: price,
      })
      .then((response) => {
        alert("Product " + id + " updated!");
        navigate("/");
      })
      .catch((error) => {
        alert("Error Ocurred updating Product:" + error);
      });
  };

  return (
    <Alert variant="primary">
      <Container>
        <Form onSubmit={submitActionHandler} id="data">
          <Form.Group controlId="form.id">
            <Form.Label>Id</Form.Label>
            <Form.Control value={id} readonly="readonly" />
          </Form.Group>
          <Form.Group controlId="form.Name">
            <Form.Label> Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={nameChangeHandler}
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="form.Category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={categoryChangeHandler}
              placeholder="Enter category"
              required
            />
          </Form.Group>
          <Form.Group controlId="form.Price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={price}
              onChange={priceChangeHandler}
              placeholder="Enter Price"
              required
            />
          </Form.Group>
          <br></br>
          <Button type="submit">Update Product</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="submit" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Alert>
  );
};
export default ProductForm;

