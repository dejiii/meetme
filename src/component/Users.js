import NewUser from "./NewUser";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3>Users</h3>
        <NewUser />
      </div>
      <UserTable />
    </div>
  );
};

export default Users;
