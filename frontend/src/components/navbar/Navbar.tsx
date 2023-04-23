import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { logoutUser } from '../Auth/authSlice';

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // if ('id' in user) {
  //   navigate('/');

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
