import React, { type FC, useState } from 'react';
import {  BrowserRouter as Router, NavLink as Link, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";


// eslint-disable-next-line
const AppHeader1: FC = () => {
  const [visible, setVisible] = useState(false);



  return (
   <Router>
   <nav>
   <Link to="/">Home</Link> | <Link to="/about">About</Link>
   </nav>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   </Routes>
   </Router>
   );
};

// export default withRouter(header);
export default AppHeader1;