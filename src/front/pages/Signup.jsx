import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/BackendServices";

export const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("All fields are required");
      return;
    }

    signup(user, navigate);
  };

  return (
    <div className="container">
      <h1>Crear Usuario</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Crear
        </button>
      </form>
    </div>
  );
};
