import React from "react";
import { useForm } from "react-hook-form";
import postBooksAIP from "../../../api/postBookAIP";

export default function ModalFromPost(props) {
  const { handleLosePost } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    postBooksAIP.bookPost(data).then((res) => {
      e.target.reset();
      return handleLosePost();
    });
  };

  return (
    <div className="modalformpost">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Book title"
            name="title"
            ref={register}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Url Image book"
            name="thumbnailUrl"
            ref={register}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            name="category"
            ref={register}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            name="author"
            ref={register}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Description"
            name="shortDescription"
            ref={register}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleLosePost()}
        >
          Close
        </button>
      </form>
    </div>
  );
}
