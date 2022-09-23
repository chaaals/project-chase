import React from "react";
import useNavbarHook from "./navbar.hook";
import NavbarComponent from "./navbar.component";

const Navbar = () => {
  const { user, handleNavigate } = useNavbarHook();
  return (
    <NavbarComponent
      user={user}
      onLogIn={handleNavigate}
      onRegister={handleNavigate}
    />
  );
};

export default Navbar;
