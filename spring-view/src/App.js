

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Employeetable from './components/Employeetable';
import Navigationbar from './components/Navigationbar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
        <Route index element={<Employeetable/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
