import React from "react";

export const Tabs = ({ children, buttons }) => {
  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
};

export default Tabs;
