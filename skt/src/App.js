import React from 'react';
import './App.css';
import Header from "./components/Header";
import pic from "./components/Image/img1.jpeg";



function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainpage'>
        <div className='Box' >
        </div>
        <div>
          <img className='Photo' src={pic} />
        </div>
        <div className='Notes1'>
          <p>
          The application uses a similar interface on iOS and macOS, with a non-textured paper background for notes and light yellow icons, suggesting pencil or crayon. Until 2013, both applications used a strongly skeuomorphic interface, with a lined, textured paper design; the Mountain Lion version placed this inside a leather folder. This design was replaced in OS X Mavericks and iOS 7.
          </p>

        </div>


      </div>

    </div>
  )
}

export default App;
