import { NavLink } from 'react-router';
import '../styles/Home.css';

const Navbar = ({ itemsCount }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Cart <span>({itemsCount})</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
