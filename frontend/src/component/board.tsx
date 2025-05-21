// frontend/src/pages/board.tsx
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";


interface Post {
  id: number;
  title: string;
  content: string;
  author_name: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

const Board: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author_name: "",
    password: "",
  });

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    const password = prompt("비밀번호를 입력하세요");
    if (!password) return;
    try {
      await axios.delete(`http://localhost:8000/posts/${id}`, {
        data: { password },
      });
      fetchPosts();
    } catch (err) {
      alert("삭제 실패: 비밀번호 불일치 또는 서버 오류");
    }
  };

  const enableEdit = (post: Post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const handleUpdate = async () => {
    const password = prompt("비밀번호를 입력하세요");
    if (!password || editingId === null) return;
    try {
      await axios.put(`http://localhost:8000/posts/${editingId}`, {
        title: editTitle,
        content: editContent,
        password,
      });
      setEditingId(null);
      fetchPosts();
    } catch (err) {
      alert("수정 실패: 비밀번호 불일치 또는 서버 오류");
    }
  };

  const handleCreate = async () => {
    const { title, content, author_name, password } = newPost;
    if (!title || !content || !author_name || !password) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    try {
      await axios.post("http://localhost:8000/posts", newPost);
      setNewPost({ title: "", content: "", author_name: "", password: "" });
      setShowCreate(false);
      fetchPosts();
    } catch (err) {
      alert("작성 실패");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">CRUD구현 : FastAPI + SQLite</h1>

      <div className="mb-8">
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded shadow"
        >
          {showCreate ? "작성 취소" : "글쓰기"}
        </button>

        {showCreate && (
          <div className="mt-6 bg-white p-6 rounded shadow-md space-y-4 border border-gray-200">
            <input
              type="text"
              placeholder="제목"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring"
            />
            <textarea
              placeholder="내용"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring h-32"
            />
            <input
              type="text"
              placeholder="작성자"
              value={newPost.author_name}
              onChange={(e) => setNewPost({ ...newPost, author_name: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={newPost.password}
              onChange={(e) => setNewPost({ ...newPost, password: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring"
            />
            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded shadow"
            >
              작성하기
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-5 bg-white border border-gray-200 rounded shadow">
            {editingId === post.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  placeholder="제목"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded h-24"
                  placeholder="내용"
                />
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={handleUpdate}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    저장
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <Fragment>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">작성자: {post.author_name}</p>
                <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
                <div className="mt-4 flex gap-2 justify-end">
                  <button
                    onClick={() => enableEdit(post)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  >
                    삭제
                  </button>
                </div>
              </Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
