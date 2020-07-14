import React from "react";
import "./findAndPost.scss";
import { useForm } from "react-hook-form";

export default function Find(props) {
  const { handleShowPost, dataBooks, dataForHome } = props;
  const { register, handleSubmit } = useForm();

  const mapDataToCategory = dataBooks.map((data) => {
    return data.category;
  });
  const filterData = [...new Set(mapDataToCategory)];

  const onSubmit = (data, e) => {
    return dataForHome(data);
  };

  return (
    <div className="find">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type title"
            name="title"
            ref={register}
          />
        </div>
        <div className="form-group">
          <select className="form-control" name="category" ref={register}>
            <option value="">Choose...</option>
            {filterData.map((data, key) => {
              return (
                <option key={key} value={data}>
                  {data}
                </option>
              );
            })}
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
