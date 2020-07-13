import React from "react";

export default function CardBooks(props) {
  const {
    title,
    category,
    author,
    shortDescription,
    createdAt,
    thumbnailUrl,
  } = props;
  return (
    <div className="card" style={{ width: "250px" }}>
      <img
        src={thumbnailUrl}
        className="card-img-top"
        alt="..."
        style={{ height: 200 }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p style={{ height: 100, overflow: "hidden" }} className="card-text">
          {shortDescription}
        </p>
        <a href="/" className="btn btn-primary">
          Request
        </a>
      </div>
    </div>
  );
}
