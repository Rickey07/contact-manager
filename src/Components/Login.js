import React from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Contexts/AuthContext";
import { useState,useEffect } from "react";
import { useModeContext } from "../Contexts/ModeContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const { mode } = useModeContext();
  const {user} = useUserAuth();
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const googleSignInHandle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate('/login');
    }
  },[user])
  return (
    <>
      <Container
        className={`d-flex justify-content-center align-items-center mt-5 ${mode?'bg-dark':'bg-light'}`}
        style={{ minHeight: "80vh" }}
      >
        <Card
          className={`p-4 ${
            mode ? "bg-secondary text-light" : "bg-light text-dark"
          }`}
          style={{ maxWidth: "400px" }}
        >
          <div className="text-center mb-3">
            <h2>Contact Manager</h2>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Control
                type="email"
                className="mb-3"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                className="mb-3"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="p-4 box mt-3 text-center">
            Didn't Register Yet ? <Link to="/signup" className={`${mode?'text-white':'text-dark'}`}>Register Now</Link> <br />
            <div className="mt-3">
              <Link className={`mt -3 ${mode?'text-white':'text-dark'}`} to="/passwordReset">
                Forgot Password
              </Link>
            </div>
          </div>
          <hr></hr>
          <Card className="d-flex align-items-center justify-content-center p-2">
            <GoogleButton
              onClick={googleSignInHandle}
              className="text-center"
            ></GoogleButton>
          </Card>
        </Card>
      </Container>
    </>
  );
}
