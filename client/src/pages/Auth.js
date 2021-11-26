import React from 'react';
import { Card, Container, Form, Button, Row, Badge } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='ml-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-2' placeholder='Введите e-mail...' />
          <Form.Control className='mt-2' placeholder='Введите пароль...' />
        </Form>

        <Row>
          <Button variant='outline-warning' className='mt-3'>
            Войти
          </Button>
          {isLogin ? (
            <div className='d-flex mt-3'>
              Нет аккаунта?
              <NavLink to={REGISTRATION_ROUTE}>
                <Badge pill bg='success' style={{ marginLeft: 10 }}>
                  Зарегистрируйтесь
                </Badge>
              </NavLink>
            </div>
          ) : (
            <div className='d-flex mt-3'>
              Есть аккаунт?
              <NavLink to={LOGIN_ROUTE}>
                <Badge pill bg='success' style={{ marginLeft: 10 }}>
                  {isLogin ? 'Регистрация' : 'Войти'}
                </Badge>
              </NavLink>
            </div>
          )}
        </Row>
      </Card>
    </Container>
  );
};

export default Auth;
