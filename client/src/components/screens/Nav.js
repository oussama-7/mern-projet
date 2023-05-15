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
  const { user } = useContext(AuthContext);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const {
    cart: { cartItems },
  } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Boutique</Navbar.Brand>
          </LinkContainer>

          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {/* {cart.cartItems.length} */}
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>

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
        </Container>
      </Navbar>
    </header>
  );
};
export default Navi;
