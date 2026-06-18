import App from './App';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
];

export default routes;
