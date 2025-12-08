import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4">
      {children}
    </div>
  );
};

export default AppLayout;
