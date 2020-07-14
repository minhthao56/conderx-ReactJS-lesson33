import React, { useState, useEffect } from "react";

import postBookAIP from "../../api/postBookAIP";
import findBookAIP from "../../api/findBookAIP";

import Nav from "../Nav/Nav";
import CardBooks from "./CardBooks/CardBooks";
import Find from "./FindAndPost/Find";
import ModalFormPost from "./FindAndPost/ModalFromPost";

export default function Home() {
  const [isShowFromPost, setIsShowFormPost] = useState(false);
  const [dataBooks, setDataBooks] = useState([]);
  const [dataFindBooks, setDataFindBooks] = useState([]);

  const handleShowPost = () => {
    setIsShowFormPost(true);
  };
  const handleLosePost = () => {
    setIsShowFormPost(false);
  };
  const fetchDataFindBook = (data) => {
    findBookAIP.findBook(data).then((res) => setDataFindBooks(res));
  };
  useEffect(() => {
    postBookAIP
      .getBooks()
      .then((res) => {
        setDataBooks(res);
      })
      .catch((err) => console.log(err));
    fetchDataFindBook();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <Nav />
      </div>
      {isShowFromPost && <ModalFormPost handleLosePost={handleLosePost} />}

      <h1>Home</h1>
      <Find
        handleShowPost={handleShowPost}
        dataBooks={dataBooks}
        dataForHome={fetchDataFindBook}
      />
      <div className="row">
        {dataFindBooks.length ? null : <h2>Not Found</h2>}
        {dataFindBooks.map((data, key) => {
          return (
            <div className="col-3 mb-5" key={key}>
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
