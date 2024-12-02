import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const CreatePost = ({ onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!authorName || !password) {
      alert('사용자명, 패스워드 입력 후 등록');
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        authorName,
        password,
        author: "익명",
        timestamp: new Date(),
      });
      setTitle("");
      setContent("");
      setAuthorName("");
      setPassword("");
      alert("글이 등록되었습니다!");
      onCancel(); // 글 작성 후 폼 닫기
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="formWrap">
      <form onSubmit={handleSubmit}>
        <div className="userInput">
          <div className="userId">
            <label>User</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div className="userId userPw">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="writeInput">
          <div>
            <label>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="submitBtnWrap">
          <button className="button-13" type="submit">등록</button>
          <button type="button" className="cancelBtn" onClick={onCancel} style={{ marginLeft: "10px" }}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
