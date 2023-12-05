
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CoinToss from './pages/CoinToss';
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<CoinToss/>}></Route>
      <Route path='/:id' element={<ToDoList/>}></Route>
    </Routes>
    </>
  );
}

export default App;
