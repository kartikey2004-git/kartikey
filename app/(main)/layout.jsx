import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        w-full
        max-w-368
        mx-auto
        px-4 sm:px-6 lg:px-10
      "
    >
      {children}
    </div>
  );
};

export default AppLayout;
