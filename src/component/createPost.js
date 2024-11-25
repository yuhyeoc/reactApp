import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const CreatePost = ({ onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        author: "익명", // 필요하면 사용자 정보를 받아와 넣을 수 있음
        timestamp: new Date(),
      });
      setTitle("");
      setContent("");
      alert("글이 등록되었습니다!");
      onCancel(); // 글 작성 후 폼 닫기
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <div>
        <label>제목:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>내용:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">등록</button>
        {/* 취소 버튼 */}
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
          취소
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
