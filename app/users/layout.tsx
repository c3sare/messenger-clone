import { User } from "@prisma/client";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

const UsersLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const users = (await getUsers()) as User[];

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
