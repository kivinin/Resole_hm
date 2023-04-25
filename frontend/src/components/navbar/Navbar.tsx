import React, { useState } from 'react';
import './StyleNavbar.css';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { RootState, useAppDispatch } from '../../store';
import ModalCart from '../Modal/ModalCart';
import { logoutUser } from '../Auth/authSlice';

function Navbar(): JSX.Element {
  const { carts } = useSelector((store: RootState) => store.carts);
  const [modal, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const clickModal = (): void => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navBarScroll">
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
            <span className="navbar-toggler-icon" />
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
              <a className="nav-link disabled"> </a>
            </div>
            {!modal ? (
              <button type="button" onClick={clickModal}>
                <img
                  style={{ width: '40px', height: '40px' }}
                  src="https://img.freepik.com/premium-vector/shopping-cart-icon-in-black-basket-vector-on-isolated-white-background-eps-10_399089-2824.jpg"
                  alt=" "
                />
              </button>
            ) : (
              <>
                <button type="button" onClick={clickModal}>
                  <img
                    style={{ width: '40px', height: '40px' }}
                    src="https://img.freepik.com/premium-vector/shopping-cart-icon-in-black-basket-vector-on-isolated-white-background-eps-10_399089-2824.jpg"
                    alt=""
                  />
                </button>
                <ModalCart />
              </>
            )}
            <button type="button" onClick={() => dispatch(logoutUser())}>
              Выйти
            </button>
            {carts.length}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
