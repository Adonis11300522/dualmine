import { useRef } from "react";
import { Col, Container } from "react-bootstrap";
import { SITE_KEY } from "../../config";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import browserHistory from "../../browserHistory";
import { storeAuthToken } from "../../utils/authToken";

export default function SignUpPage() {
  const firstname = useRef("");
  const lastname = useRef("");
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirm = useRef("");
  const term = useRef("");

  const navigate = useNavigate();

  const LoginSubmit = async () => {
    if (
      firstname.current.value == "" ||
      lastname.current.value == "" ||
      username.current.value == "" ||
      email.current.value == "" ||
      password.current.value == "" ||
      confirm.current.value != password.current.value ||
      !term.current.checked
    ) {
      return false;
    }

    try {
      const { token } = await api.post("/sign-up", {
        firstname: firstname.current.value,
        lastname: lastname.current.value,
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      });

      storeAuthToken(token);

      browserHistory.push("/login");
      navigate("/login");
    } catch {
      return false;
    }
  };

  return (
    <Container className="login-container py-5 justify-content-center">
      <Col lg={12} md={12} sm={12} className="py-5 text-center">
        <h1 className="fw-300">Get Register For Free</h1>
        <h3 className="text-center">
          Register account and start earning money!
        </h3>
      </Col>
      <Col lg={6} md={6} sm={8} className=" text-center m-auto">
        <form className="login-form form-inline d-flex flex-row flex-wrap">
          <div className="form-group mb-3 col-md-6 px-3">
            <input
              type="text"
              ref={firstname}
              name="firstName"
              className="form-control"
              id="firstname"
              aria-describedby="emailHelp"
              placeholder="first name"
            />
          </div>
          <div className="form-group mb-3 col-md-6 px-3">
            <input
              type="text"
              ref={lastname}
              name="lastName"
              className="form-control"
              id="lastname"
              placeholder="last name"
            />
          </div>
          <div className="form-group mb-3 col-md-6 px-3">
            <input
              type="text"
              ref={username}
              name="username"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="username"
            />
          </div>
          <div className="form-group mb-3 col-md-6 px-3">
            <input
              type="email"
              ref={email}
              name="email"
              className="form-control"
              id="email"
              placeholder="email address"
            />
          </div>
          <div className="form-group mb-3 col-md-6 px-3">
            <input
              type="password"
              ref={password}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
            />
          </div>
          <div className="form-group mb-3 col-md-6 px-3">
            <input
              type="password"
              ref={confirm}
              name="con-password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="confirm password"
            />
          </div>
          <div
            className="g-recaptcha mt-3 d-block px-3"
            data-sitekey={SITE_KEY}
          ></div>
          <div className="form-group my-3 col-md-12 px-3 check-group">
            <input
              type="checkbox"
              ref={term}
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label float-left px-2"
              htmlFor="exampleCheck1"
            >
              I have read and agree to the Terms of Use
            </label>
          </div>
          <button
            type="button"
            className="bg-gradient-r-p py-3 px-5 border text-white rounded-pill mt-3"
            onClick={() => {
              LoginSubmit();
            }}
          >
            Register
          </button>
        </form>
      </Col>
    </Container>
  );
}
