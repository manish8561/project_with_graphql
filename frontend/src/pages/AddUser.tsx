import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER_MUTATION, GET_USERS } from "../services/queries";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addUser] = useMutation(ADD_USER_MUTATION, {
    variables:{
        createUserDto: {
            name,
            email,
          }
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
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
