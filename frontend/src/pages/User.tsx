import { useQuery } from "@apollo/client";
import { GET_USERS } from "../services/queries";
import AddUser from "./AddUser";

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.status}
          </li>
        ))}
      </ul>
      <div>
        <AddUser />
      </div>
    </div>
  );
}

export default Users;
