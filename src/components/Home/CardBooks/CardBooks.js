import React from "react";

export default function CardBooks() {
  return (
    <div className="card" style={{ width: "250px" }}>
      <img
        src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg"
        className="card-img-top"
        alt="..."
        style={{ height: 200 }}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Request
        </a>
      </div>
    </div>
  );
}
