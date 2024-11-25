import React from "react";

function AccessibleButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#32a1ff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {label}
    </button>
  );
}

export default AccessibleButton;
