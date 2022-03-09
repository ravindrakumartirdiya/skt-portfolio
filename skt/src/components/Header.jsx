import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-scroll'
// import About from './About';
// import Work from './Work';
import './Header.css';

const Link1 = styled(Link)`
&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;



const Header = () => {
  return (
    <div className='Header' >
      <div className='Logo'><h1>Portfolio</h1></div>

      <div className='Menu'>
        <div>
          <Link1 to="./About" smooth={true} duration={500} >
            About

          </Link1></div>
        <div >
          <Link1 to="./Work" smooth={true} duration={500}>
            Work
          </Link1></div>
      </div>
    </div>
  );
};

export default Header;
