import { NavLink } from 'react-router';
import '../styles/App.css';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this page doesn't exist!</h1>
      <NavLink to="/">
        You can go back to the home page by clicking here, though!
      </NavLink>
    </div>
  );
};

export default ErrorPage;
