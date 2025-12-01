import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AutomotiveWhitepaper from './pages/AutomotiveWhitepaper';
import BFSIWhitepaper from './pages/BFSIWhitepaper';
import AutomotiveBlog from './pages/AutomotiveBlog';
import BFSIBlog from './pages/BFSIBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources/whitepapers/automotive-intelligence" element={<AutomotiveWhitepaper />} />
      <Route path="/resources/whitepapers/cybersecurity-bfsi" element={<BFSIWhitepaper />} />
      <Route path="/resources/blog/automotive-intelligence" element={<AutomotiveBlog />} />
      <Route path="/resources/blog/bfsi-cybersecurity" element={<BFSIBlog />} />
    </Routes>
  );
}

export default App;