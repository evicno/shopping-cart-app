import { useNavigate } from 'react-router';
import '../styles/Home.css';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <h1>The Store</h1>
      <button onClick={() => navigate('/shop')} className="home-button">
        Shop
      </button>
    </div>
  );
};

export default Home;
