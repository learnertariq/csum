import React, { useState } from "react";
import http from "../service/http";
import userService from "../service/userService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, msg: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError({ hasError: false });
    setSuccess(false);
    try {
      const { data } = await userService.register({ name, email, password });
      console.log(data);
      setLoading(false);
      setSuccess(true);

      window.location = "/login";
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
        setError({ hasError: true, msg: ex.response.data.msg });
      }
      setLoading(false);
    }
  };

  return (
    <section className="register-section">
      <div className="register">
        <div className="form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          {loading && <p className="msg">loading.....</p>}
          {error.hasError && <p className="error msg">{error.msg}</p>}
          {success && <p className="success msg">User successfully created</p>}
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </section>
  );
};

export default Register;
