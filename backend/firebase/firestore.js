import { doc, updateDoc } from "firebase/firestore";

// Firestore 데이터 업데이트
const postRef = doc(db, "posts", postId);
await updateDoc(postRef, {
  title: "수정된 제목",
  content: "수정된 내용",
});
