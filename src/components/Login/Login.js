import React from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import signUpApi from "../../api/userAIP";

export default function Login() {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const onSubmit = (data, e) => {
    signUpApi
      .logIn(data)
      .then((res) => {
        console.log(res);
        e.target.reset();
        localStorage.setItem("token", res.token);
        history.replace("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          let msg = err.response.data.msg;
          alert(msg);
        }
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            ref={register}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            ref={register}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
