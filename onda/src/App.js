import React from 'react';
import Menu from './menu';
import MenuDischild from './menu-dischild';
function App() {
  return (
    <div>
      <h1>Menu Picker</h1>
      <br></br>
      <Menu />
      <br></br>
      <h1>Disabled children</h1>
      <MenuDischild />
    </div>
  
  );
}

export default App;