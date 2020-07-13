import React, { useState, useEffect } from "react";

import postBookAIP from "../../api/postBookAIP";

import Nav from "../Nav/Nav";
import CardBooks from "./CardBooks/CardBooks";
import Find from "./FindAndPost/Find";
import ModalFormPost from "./FindAndPost/ModalFromPost";

export default function Home() {
  const [isShowFromPost, setIsShowFormPost] = useState(false);
  const [dataBooks, setDataBooks] = useState([]);
  const handleShowPost = () => {
    setIsShowFormPost(true);
  };
  const handleLosePost = () => {
    setIsShowFormPost(false);
  };

  useEffect(() => {
    postBookAIP.getBooks().then((res) => {
      setDataBooks(res);
    });
  });

  return (
    <div className="container-fluid">
      <div>
        <Nav />
      </div>
      {isShowFromPost && <ModalFormPost handleLosePost={handleLosePost} />}

      <h1>Home</h1>
      <Find handleShowPost={handleShowPost} />
      <div className="row">
        {dataBooks.map((data, key) => {
          return (
            <div className="col-3" key={key}>
              <CardBooks
                title={data.title}
                category={data.category}
                author={data.author}
                shortDescription={data.shortDescription}
                createdAt={data.createdAt}
                thumbnailUrl={data.thumbnailUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
