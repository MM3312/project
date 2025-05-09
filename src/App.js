
import './App.css';

import NavBar from './Component/navbar'; 
import Sidebar from './Component/Sidebar';
import Student from './Component/Student';
import Feehead from './Component/Feehead';
import AddnewField from './Component/Addnewfield';
import { Route,Routes } from 'react-router-dom';
import View from './Component/View';



function App() {
  return (
    <div className='.bodycontainer'>
      <NavBar/>

      <div className='mains'>
      <Sidebar currentSection="students" />
         <div className='routesContent'>

          <Routes >
        <Route path="/students" element={<Student/>}/>``
        <Route path="/feeHead" element={<Feehead/>}/>
        <Route path="/addnewfield" element={<AddnewField/>}/>
        <Route path="/view" element={<View/>}/>
           </Routes>
    
        
         </div>
       
      
      </div> 
       {/* <Feehead/> */}
    </div>
    
  );
}

export default App;
