import React from "react";
import "./Logout.css";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

const Logout = () => {
  return (
    <>
      <Button
        className="Logout"
        label="Logout"
        icon="pi pi-sign-out"
        iconPos="left"
      />
    </>
  );
};

export default Logout;
