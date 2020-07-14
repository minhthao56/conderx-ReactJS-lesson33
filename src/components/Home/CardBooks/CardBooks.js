import React from "react";
import moment from "moment";

export default function CardBooks(props) {
  const {
    title,
    category,
    author,
    shortDescription,
    createdAt,
    thumbnailUrl,
  } = props;
  const time = new Date(createdAt);
  const timeFromNow = moment(time).fromNow();
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
        <p>
          {category} - {author}
        </p>
        <button href="/" className="btn btn-primary">
          Request
        </button>
        <p>{timeFromNow}</p>
      </div>
    </div>
  );
}
