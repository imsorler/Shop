import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Auth from '../pages/Auth';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <NavLink to={SHOP_ROUTE} style={{ color: 'red', textDecoration: 'none' }}>
            Shop
          </NavLink>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ml-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
              {user.isAuth ? (
                <>
                  <Nav.Link href='#action1'>Панель</Nav.Link>
                  <Nav.Link href='#action2'>Выйти</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href='#action1' onClick={() => user.setIsAuth(true)}>
                    Авторизация
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Auth />
    </>
  );
});

export default NavBar;
