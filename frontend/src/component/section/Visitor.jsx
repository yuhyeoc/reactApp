import React, { useEffect } from "react";

function Visitors() {
  // 페이지 로드 시 방문자 수 추적
  useEffect(() => {
    // 방문자 수를 추적하는 함수
    const trackVisitors = () => {
      // 이전에 방문한 적이 있는지 확인
      let visitedBefore = localStorage.getItem("visitedBefore");

      // 만약 이전에 방문한 적이 없다면
      if (!visitedBefore) {
        // 방문자 수를 증가시킴
        let visitorCount = localStorage.getItem("visitorCount") || 0;
        visitorCount++;
        localStorage.setItem("visitorCount", visitorCount);

        // 방문한 적이 있음을 표시
        localStorage.setItem("visitedBefore", true);
      }
    };

    // 페이지가 로드될 때 trackVisitors 함수 호출
    trackVisitors();
  }, []); // 빈 배열을 전달하여 페이지가 처음 로드될 때만 실행

  // 방문자 수 가져오기
  let visitorCount = localStorage.getItem("visitorCount") || 0;

  return (
    <div className="visitorInfo">
      <h1>Visitor : {visitorCount}</h1>
    </div>
  );
}

export default Visitors;
