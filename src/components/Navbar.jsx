import { Link } from 'react-router';
import '../styles/Home.css';

const Navbar = ({ itemsCount }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span>({itemsCount})</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
