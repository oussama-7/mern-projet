import React from 'react';
import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown, Badge } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { Store } from '../Store';
import Nav from 'react-bootstrap/Nav';

const Navi = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const { state } = useContext(Store);
  const { cart } = state;
  const {
    cart: { cartItems },
  } = state;
  const signoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    localStorage.removeItem('paymentMethod');
    localStorage.removeItem('shippingAddress');
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Boutique</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-end">
              {user ? (
                <>
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {/* {cart.cartItems.length} */}
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </>
              ) : (
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              )}
              {user !== null ? (
                <NavDropdown title={user.username} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>Order History</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Navi;
