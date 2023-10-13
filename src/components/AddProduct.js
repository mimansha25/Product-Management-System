import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const baseURL = "http://localhost:8097/api/v1/product";

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const cancelHandler = () => {
    //reset the values of input fields
    setName("");
    setCategory("");
    setPrice(0);
    navigate("/read");
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        name: name,
        category: category,
        price: price,
      })
      .then((response) => {
        alert("Product " + name + " added successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("error===" + error);
      });
  };

  return (
    <Alert variant="primary">
      <Container>
        <Form onSubmit={submitActionHandler}>
          <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
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
              placeholder="Enter Category"
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
          <Button type="submit">Add Product</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="submit" onClick={() => cancelHandler()}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Alert>
  );
};

export default AddProduct;
