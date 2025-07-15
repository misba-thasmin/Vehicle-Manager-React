import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVehicle from './components/AddVehicle';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes >
          <Route path="/Add" elemet={<AddVehicle />} />
          <Route path="/Search" elemet={<Search />} />
          <Route path="/Delete" elemet={<Delete />} />
          <Route path="/View" elemet={<View />} />
          </Routes></BrowserRouter>
 
    </div>
  );
}

export default App;
