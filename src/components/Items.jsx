import ItemCard from './ItemCard';

const Items = ({ itemsData }) => {
  console.log(itemsData);
  const listOfItems = itemsData.map((num) => {
    console.log(num);
    <ItemCard num={num} />;
  });
  return <div className="items">{listOfItems}</div>;
};

export default Items;
