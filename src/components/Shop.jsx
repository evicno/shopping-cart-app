import Navbar from './Navbar';
import Items from './Items';

const Shop = () => {
  const data = [1, 2, 3, 4];
  return (
    <>
      <Navbar />
      <h1>Shop</h1>
      <Items itemsData={data} />
    </>
  );
};

export default Shop;
