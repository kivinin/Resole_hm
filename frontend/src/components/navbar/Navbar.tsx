/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './StyleNavbar.css';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { RootState, useAppDispatch } from '../../store';
import ModalCart from '../Modal/ModalCart';
import { logoutUser } from '../Auth/authSlice';
import ModalSearchOrder from '../ModalSearchOrder/ModalSearchOrder';

function Navbar(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { carts } = useSelector((store: RootState) => store.carts);
  const { user } = useSelector((store: RootState) => store.auth);
  const [modal, setModal] = useState(false);
  const [modall, setModall] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickModal = (): void => {
    setModal((prev) => !prev);
  };
  const clickModall = (): void => {
    setModall((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navBarScroll">
        <div className="container-fluid blockNavbar" id="navBAr">
          <div
            style={{
              position: 'absolute',
              color: '#b1fbe2',
              fontSize: '8rem',
              left: '49%',
              bottom: '-59%',
              letterSpacing: '30px',
              opacity: '0.7',
            }}
          >
            Resole
          </div>
          <div
            style={{
              position: 'absolute',
              color: '#b1fbe2',
              fontSize: '8rem',
              left: '48.5%',
              bottom: '-59%',
              letterSpacing: '30px',
              opacity: '0.7',
            }}
          >
            Resole
          </div>
          <div>
            <img
              style={{ width: '70px', height: '70px', borderRadius: '50%' }}
              src="logo.jpg"
            />
          </div>
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
          {!('id' in user) ? (
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              {!modal ? (
                <button
                  type="button"
                  onClick={clickModal}
                  style={{ border: 'none', margin: '0 20px 0 0' }}
                  className="nav-link active zPov"
                >
                  КОРЗИНА
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={clickModal}
                    style={{ border: 'none', margin: '0 20px 0 0' }}
                    className="nav-link active zPov"
                  >
                    КОРЗИНА
                  </button>
                  <ModalCart clickModal={clickModal} />
                </>
              )}
              <div className="navbar-nav">
                <a
                  className="nav-link active zPov"
                  aria-current="page"
                  href="#"
                >
                  ВЫЗВАТЬ КУРЬЕРА
                </a>
                <a className="nav-link disabled"> </a>
              </div>
              {modall ? (
                <div className="navbar-nav">
                  <ModalSearchOrder clickModall={clickModall} />
                  <a className="nav-link disabled"> </a>
                </div>
              ) : (
                <button
                  type="button"
                  style={{ border: 'none', margin: '0 20px 0 0' }}
                  className="nav-link active zPov"
                  onClick={clickModall}
                >
                  ПРОВЕРИТЬ ЗАКАЗ
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="navbar-nav" style={{}}>
                <button
                  type="button"
                  style={{ left: '900px', position: 'relative' }}
                  className="nav-link active zPov"
                  onClick={() => dispatch(logoutUser())}
                >
                  ВЫЙТИ
                </button>
              </div>
              <div className="navbar-nav" style={{}}>
                <button
                  type="button"
                  style={{ left: '100px', position: 'relative' }}
                  className="nav-link active zPov"
                  onClick={() => navigate('/list')}
                >
                  АДМИНКА
                </button>
              </div>
            </>
          )}
        </div>
        <div className="blockInfo">
          <div style={{ width: '200px', fontSize: '22px', fontWeight: '700' }}>
            +7 982 410 8293
          </div>
          <div style={{ width: '200px', fontSize: '20px' }}>12.00 - 20.00</div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
