import React from 'react'
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  
  return (
    <div className=' w-full flex max-w-1800 m-auto'>
      <div className=" w-full"> 
        <Header/>
        <div className="f-full bg-gray-100 p-3 sm:p-8">
          <div className=" flex-wrap pt-5 flex justify-between gap-5">
            <NavBar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
