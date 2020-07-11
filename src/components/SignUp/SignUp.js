import React from "react";
import "./SignUp.scss";
import { useForm } from "react-hook-form";
import signUpApi from "../../api/userAIP";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const onSubmit = (data, e) => {
    signUpApi
      .signUp(data)
      .then((res) => {
        console.log(res);
        e.target.reset();
        history.push("/user/login");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          let msg = err.response.data.msg;
          alert(msg);
          e.target.reset();
        }
      });
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            ref={register}
            name="name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={register}
            name="email"
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
            ref={register}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
}
