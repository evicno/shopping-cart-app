import { useNavigate } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  let navigate = useNavigate();
  fetch('https://fakestoreapi.com/products?category=jewelery')
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <button onClick={() => navigate('/shop')}>Shop</button>
    </>
  );
}

export default App;
