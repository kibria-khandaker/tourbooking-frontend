import React,{ useState } from "react";
import { Container, Row, Col, Form, ListGroup, Button,FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";


const Login = () => {
  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(credentials);
    // navigate('/thank-you')
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="loginImg" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="loginImg" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">Login</Button>
                </Form>
                <p>Don't have Account <Link to='/register'>Create</Link> </p>
              </div>


            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
