import React from 'react';
import {NavLink} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';

import {auth} from '../fire-base';

class Header extends React.Component {
  logOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem('user');
        NotificationManager.success('You are logged out', 'Success');
        setTimeout(function() {
          window.location = '/';
        }, 1000);
      })
      .catch(error => {
        // An error happened.
        console.log(error.message);
        console.log(error.code);
        NotificationManager.error(
          'Please try again',
          'Something wrong happened'
        );
      });
  };

  privateRoute = () => {
    if (localStorage.getItem('user')) {
      return (
        <>
          <li className='nav-item'>
            <NavLink
              to='/create-book'
              className='nav-link'
              activeClassName='active'>
              Create New Book
            </NavLink>
          </li>
          <li className='nav-item'>
            <button onClick={this.logOut} className='btn btn-link nav-link'>
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className='nav-item'>
            <NavLink to='/login' className='nav-link' activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/register'
              className='nav-link'
              activeClassName='active'>
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'>
          <div className='container'>
            <NavLink className='navbar-brand' to='/'>
              DGBook
            </NavLink>
            <button className='navbar-toggler' type='button'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    exact
                    to='/'
                    className='nav-link'
                    activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                {this.privateRoute()}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
