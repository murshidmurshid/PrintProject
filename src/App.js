import './App.css';
import React, { useEffect, useState } from 'react';

// import Index from './Component/Index';
import Paged2 from './Component/Paged2';


function App() {
  // useEffect(() => {
  //   return () => {
  //     const MyPreview = new Previewer()
  //     MyPreview.preview(
  //       // document.querySelector(".content").innerHTML,
  //       document.querySelector("#root").innerHTML,
  //       ['/src/Component/paged2.css '],
  //       document.body
  //     )
  //   }
  // }, [])
  // const contentRef = useRef('')

  return (
    <>

      <Paged2 />
      {/* <Index /> */}

     
    </>

  );
}


export default App;


