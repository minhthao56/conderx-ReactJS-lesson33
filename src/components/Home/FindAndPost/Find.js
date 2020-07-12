import React from "react";
import "./findAndPost.scss";

export default function Find(props) {
  const { handleShowPost } = props;
  return (
    <div className="find">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type title"
          />
        </div>
        <div className="form-group">
          <select className="form-control">
            <option selected>Choose...</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Find
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleShowPost()}
        >
          Post
        </button>
      </form>
    </div>
  );
}
