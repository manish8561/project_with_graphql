import { useQuery } from "@apollo/client";
import { GET_USERS } from "../services/queries";
import AddUser from "./AddUser";
import { Table } from "react-bootstrap";

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user: any, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <AddUser />
      </div>
    </div>
  );
}

export default Users;
