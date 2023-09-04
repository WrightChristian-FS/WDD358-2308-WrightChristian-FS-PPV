/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Link } from 'react-router-dom';
import styles from './styles.module.css';
import AuthContainer from '../containers/auth';

class Header extends React.Component {
  logUserOut = () => {
    const { logout } = this.props;
    logout();
    return (
      <Navigate replace to="/" />
    );
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
          <h1>
            <link to="/" className={styles.header__brand} value="Decision Maker" />
          </h1>
          <div className={styles.links}>
            {!loggedIn && (
            <>
              <Link to="/admin/decisions" className={styles.header__link}>Dashboard</Link>
              <Link to="/admin/decisions/new" className={styles.header__link}>Create a new decision</Link>

              <button type="button" onClick={this.logUserOut} className={styles.header__link}>logout</button>
            </>
            )}
            {!loggedIn && (
            <Link to="/login" className={styles.header__link}>Login</Link>
            )}
          </div>

        </div>
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  loggedIn: false,
};

export default AuthContainer(Header);
