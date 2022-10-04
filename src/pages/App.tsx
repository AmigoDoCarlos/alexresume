import React from 'react';
import Intro from '../sections/Intro';
import Bio from '../sections/Bio';
import Experiences from '../sections/Experiences';
import Skills from '../sections/Skills';
import Hobbies from '../sections/Hobbies';
import Future from '../sections/Future';

function App() {
  return (
    <div>
      <Intro/>
      <Bio/>
      <Experiences/>
      <Skills/>
      <Hobbies/>
      <Future/> 
    </div>
  );
}

export default App;
