import React, { type FC, useState } from 'react';
import { BrowserRouter as Router, NavLink as Link, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
// import { Menubar } from '@base-ui/react/menubar';
// import { Menu } from '@base-ui/react/menu';


// eslint-disable-next-line
const AppHeader1 = () => {
//   const [visible, setVisible] = useState(false);



  return (

   <Router>
       {/* <Menubar>
            <Menu.Root>
                <Menu.Item >
                    Menu Item 1
                </Menu.Item>
            </Menu.Root>
       </Menubar>
       */}
       <nav style={{display: 'flex',
                        justifyContent: 'center', // Centers links horizontally
                        alignItems: 'center',     // Centers links vertically
                        gap: '1.5rem',            // Adds consistent space between links
                        padding: '1rem',
                        backgroundColor: '#f8f9fa'}}>
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