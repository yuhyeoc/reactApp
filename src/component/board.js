import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import CreatePost from "./createPost";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/Tagged";


const Board = () => {
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsArray);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ProfileCss>
        <div className="profileWrap boardContainer">
          <h3 className="profileH3">게시판</h3>

          <div className="boardSection">
            <p className="title">
              Firebase DB를 사용한 CRUD 구현입니다.
            </p>
            <div className="writeWrap">
              <button className="writeBtn" onClick={() => setShowCreatePost((prev) => !prev)}>
                {showCreatePost ? "취소" : "글쓰기"}
              </button>

              {/* 글쓰기 폼 */}
              {showCreatePost && (
                <CreatePost onCancel={() => setShowCreatePost(false)} />
              )}
            </div>

            <div className="listWrap">
              {posts.map((post) => (
                <div className="boardList" key={post.id} style={{ padding: "10px", margin: "16px 0" }}>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <small>작성자: {post.author}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProfileCss>
      {/* <BackBtn /> */}
    </ThemeProvider>
  );
};

export default Board;

const ProfileCss = styled.div`
  width: 100%;
  color: #333;
  padding-top: 56px;
`;