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
       
               <h2>Hii,</h2>
                
                <h3>"I have a passion for creating user experiences that are seamless and impactful."</h3>
                
               <h3> Understanding the human experience is essential for creating useful and effective products.</h3>
                
               <h3>I enjoy using my skill set to empower people to accomplish their goals. I create digital experiences
                that make life easier.</h3> 
            
        </div>


      </div>

    </div>
  )
}

export default App;
