import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Ghandpaa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
