import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  flex px-9 h-screen  mt-8   ">
      <Sidebar />
      <div className="flex-1  lg:ml-12">{children}</div>
    </div>
  );
};

export default layout;
