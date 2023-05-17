import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../Styles/navbar.css';

export default function Layout() {
  return (
    <>
        <nav id="navbar_top navbar" className="navbar navbar-expand-lg navbar-dark bg-success main-navigation" >
          <div className="container">
            <Link className="navbar-brand" to="/">Sold.com!</Link>
            <button className="navbar-toggler" type="button" onClick={()=>document.querySelector(".main-navigation").classList.add('active')}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="overlay d-flex d-lg-none" onClick={()=>document.querySelector(".main-navigation").classList.remove('active')}></div>
            <div className="order-lg-2 bg-success d-lg-flex w-100 sidebar pb-3 pb-lg-0">
              {}
              <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link px-3 px-lg-2 active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link px-3 px-lg-2" to="/admin">
                    Admin
                  </Link>
                </li>
                <li className='nav-item'>
                  <button className='btn btn-warning'><i className="bi bi-person text-light pe-1 icon-size"></i>Login</button>
                </li>
                <li className="nav-item pt-2 ms-2">
                  <button className='cartbtn'>
                  <i className="bi bi-cart3 text-light icon-size"></i>
                  <span className='cart-amount'>4</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
    </>
  )
}
