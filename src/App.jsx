import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  fetch('https://fakestoreapi.com/products?category=jewelery')
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
