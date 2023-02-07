import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Layout from "./Layout";
import NoMatch from "./NoMatch";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Service from "./Service";
import Summary from "./Summary";
import { ABOUT, CONTACT, HOME, PORTFOLIO, RESUME, SERVICE } from "./Urls";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Summary />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={RESUME} element={<Resume />} />
        <Route path={SERVICE} element={<Service />} />
        <Route path={PORTFOLIO} element={<Portfolio />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
