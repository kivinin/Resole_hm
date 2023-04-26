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
            Resole
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
        
  
              <a className="nav-link disabled"> </a>
            </div>
            {!modal ? (
              <button
                type="button"
                onClick={clickModal}
                style={{ border: 'none', margin:"0 20px 0 0"}}
                className="nav-link active"
              >
                корзина
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={clickModal}
                  style={{ border: 'none', margin:"0 20px 0 0"}}
                  className="nav-link active"
                >
                  корзина
                </button>
                <ModalCart clickModal={clickModal} />
              </>
            )}
            <button type="button" className="nav-link active" onClick={() => dispatch(logoutUser())} style={{ border: 'none' }}>
              Выйти
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
