import React from 'react';
import { Routes, Route } from "react-router-dom";
import { HOME, ABOUT, RESUME, SERVICE, PORTFOLIO, CONTACT } from './Urls';
import Layout from './Layout';
import NoMatch from './NoMatch';
import Summary from "./Summary";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Summary />} />
        <Route path={ABOUT} element={<NoMatch />} />
        <Route path={RESUME} element={<NoMatch />} />
        <Route path={SERVICE} element={<NoMatch />} />
        <Route path={PORTFOLIO} element={<NoMatch />} />
        <Route path={CONTACT} element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
