import React from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { logoutUser } from '../Auth/authSlice';

function Navbar(): JSX.Element {
 const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
               <button onClick={() => dispatch(logoutUser())}>Выйти</button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>

  );
}

export default Navbar;
