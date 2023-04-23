import React from "react";
import { useState } from "react";
import { Outlet } from "react-router";

function Navbar(): JSX.Element {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
