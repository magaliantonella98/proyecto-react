import React from 'react';
import { Link } from 'react-router-dom';
import CartWidgets from '../CartWidgets';
import './styles.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className='text-decoration-none' to='/'><h1 className="navbar-brand fst-italic">SATURN STORE</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className='text-decoration-none' to='/category/1'><p className="nav-link" aria-current="page">Mochilas</p></Link>
              </li>
              <li className="nav-item">
                <Link className='text-decoration-none' to='/category/2'><p className="nav-link">Carteras</p></Link>
              </li>
              <li className="nav-item">
              <Link className='text-decoration-none' to=''><p className="nav-link">Contacto</p></Link>
              </li>
              <span className="nav-link"><CartWidgets/></span>
            </ul>
            
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default NavBar;