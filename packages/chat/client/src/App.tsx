import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import Home from "./Home/Home";
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:roomId" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
