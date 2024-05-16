import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER_MUTATION, GET_USERS } from "../services/queries";
import { Button, Form } from "react-bootstrap";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addUser] = useMutation(ADD_USER_MUTATION, {
    variables: {
      createUserDto: {
        name,
        email,
      },
    },
    refetchQueries: [GET_USERS],
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addUser();
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h2>Add User</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default AddUser;
