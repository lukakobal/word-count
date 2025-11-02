import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const countWords = (str) => {
    const words = str
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "");
    return words.length;
  };

  return (
    <div className="container">
      <h1>Word Counter ✍️</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows="5"
      />
      <p>Word count:{countWords(text)}</p>
    </div>
  );
}
