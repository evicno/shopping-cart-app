import { useNavigate } from 'react-router';

const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate('/shop')}>Shop</button>
    </>
  );
};

export default Home;
