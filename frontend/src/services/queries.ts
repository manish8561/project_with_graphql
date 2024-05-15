// src/queries.js

import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      _id
      name
      email
      status
    }
  }
`;

export const ADD_USER_MUTATION = gql`
  mutation CreateUser($createUserDto: CreateUserDto!) {
    createUser(createUserDto:$createUserDto){
        name
        email
    }
  }
`;
