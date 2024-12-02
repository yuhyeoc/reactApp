import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
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

  const handleDelete = async (postId) => {
    const password = prompt("게시글의 비밀번호를 입력하세요:");
    const post = posts.find((post) => post.id === postId);

    if (post && post.password === password) {
      try {
        await deleteDoc(doc(db, "posts", postId));
        alert("게시글이 삭제되었습니다.");
      } catch (e) {
        console.error("Error deleting document: ", e);
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ProfileCss>
        <div className="profileWrap boardContainer">
          <h3 className="profileH3">메모장</h3>
          <div className="boardSection">
            <p className="title">Firebase DB를 사용한 CRUD 구현입니다.
              <button className="writeBtn button-13" onClick={() => setShowCreatePost((prev) => !prev)}>
                {showCreatePost ? "취소" : "글쓰기"}
              </button>
            </p>
            <div className="writeWrap">
              {showCreatePost && <CreatePost onCancel={() => setShowCreatePost(false)} />}
            </div>

            <div className="listWrap">
              {posts.map((post) => (
                <div className="boardList" key={post.id} style={{ padding: "10px", margin: "16px 0" }}>
                  <h2>{post.title}</h2>
                  <div className="postInfo">
                    <span>작성자: {post.authorName}</span>
                    <div>
                      <button onClick={() => handleDelete(post.id)} style={{ marginRight: "8px" }}>
                        삭제
                      </button>
                      <button type="button">
                        수정
                      </button>
                    </div>
                  </div>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProfileCss>
    </ThemeProvider>
  );
};

export default Board;

const ProfileCss = styled.div`
  width: 100%;
  color: #333;
  padding-top: 56px;
`;
