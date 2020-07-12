import React, { useState } from "react";

import Nav from "../Nav/Nav";
import CardBooks from "./CardBooks/CardBooks";
import Find from "./FindAndPost/Find";
import ModalFormPost from "./FindAndPost/ModalFromPost";

export default function Home() {
  const [isShowFromPost, setIsShowFormPost] = useState(false);
  const handleShowPost = () => {
    setIsShowFormPost(true);
  };
  const handleLosePost = () => {
    setIsShowFormPost(false);
  };

  return (
    <div className="container-fluid">
      <div>
        <Nav />
      </div>
      {isShowFromPost && <ModalFormPost handleLosePost={handleLosePost} />}

      <h1>Home</h1>
      <Find handleShowPost={handleShowPost} />
      <div>
        <CardBooks />
      </div>
    </div>
  );
}
