import Sidebar from "../components/sidebar/Sidebar";

const UsersLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
