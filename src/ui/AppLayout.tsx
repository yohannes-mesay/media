import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[5rem_1fr] h-screen absolute inset-0">
      <Navbar />
      <Sidebar />
      <div className="overflow-scroll bg-black no-scrollbar">
        <div className="bg-black my-0 mx-auto flex flex-col gap-3.2rem">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
