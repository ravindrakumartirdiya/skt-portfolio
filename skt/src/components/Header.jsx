import React from 'react';
import { Router,  Route } from 'react-router-dom';
import About from './About';
import Work from './Work';
import './Header.css';


const Header = () => {
  return (
    <div className='Header'>
        <div className='Menubar'>
          {/* <Switch> */}
            <li path='/work' component={Work} />
            <li path='/about' component={About} /> 
          {/* </Switch> */}
        </div>
    </div>
  );
};

export default Header;
