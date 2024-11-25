import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import CreatePost from "./createPost";

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
    <div>
      <h1>게시판</h1>
      
      <button onClick={() => setShowCreatePost((prev) => !prev)}>
        {showCreatePost ? "취소" : "글쓰기"}
      </button>

      {/* 글쓰기 폼 */}
      {showCreatePost && (
        <CreatePost onCancel={() => setShowCreatePost(false)} />
      )}

      {/* 게시글 목록 */}
      {posts.map((post) => (
        <div className="boardList" key={post.id} style={{ padding: "10px", margin: "16px 0" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <small>작성자: {post.author}</small>
        </div>
      ))}
    </div>
  );
};

export default Board;
