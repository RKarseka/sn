import classNames from 'classnames';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserPhoto } from '../user-photo';
import styles from './nav.module.scss';

export const NavMenu = () => {
  return (
    <Navbar
      expand="sm"
      variant="light"
      className={classNames(styles.wrapper, styles.container)}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand>
          <UserPhoto />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="tabs" className="me-auto">
            <Nav.Link as={NavLink} to={'/'}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/friends'}>
              Friends
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/timeline'}>
              Timeline
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/messages'} disabled>
              Messages
            </Nav.Link>
            <Nav.Link as={NavLink} to={'/news'} disabled>
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
