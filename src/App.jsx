import { useNavigate } from 'react-router';
import './App.css';
import Nav from './components/Nav';

function App() {
  let navigate = useNavigate();
  return (
    <>
      <Nav />
      <h1>Shopping cart</h1>
      <button onClick={() => navigate('/shop')}>Shop</button>
    </>
  );
}

export default App;
