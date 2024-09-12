import Helmet from "../components/Helmet/Helmet";
import { Container, Col, Row, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  //for email
  const [email, setEmail] = useState("");
  //for password
  const [password, setPassword] = useState("");
  //to upload file
  const [file, setFile] = useState(null);
  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-4">Signup </h3>
              <Form className="auth_form">
                <FormGroup className="form_group">
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <input
                    type="file"
                    value={password}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>

                <button type="submit" className="buy_btn auth_btn">
                  Create an Account
                </button>
                <p>
                  Already have an acoount?{" "}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Signup;
