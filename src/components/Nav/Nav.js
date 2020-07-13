import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Nav() {
  const DataUser = useSelector((state) => state.DataUser);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ display: "flex" }}
    >
      <Link className="navbar-brand" href="/">
        Book Share
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          {DataUser.name ? (
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {DataUser.name}
            </span>
          ) : (
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <li className="nav-item active">
                <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/user/signup">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
