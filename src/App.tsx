import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import NoMatch from './NoMatch';
import Summary from "./Summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Summary />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
