import React from "react";
import "antd/dist/antd.css";

import { Books } from "./test/books";
import { Sophia } from "../src/sophia";

function App() {
  return (
    <>
      <Sophia emojiIcon="💕" supervise />
      <Books />
    </>
  );
}

export default App;
