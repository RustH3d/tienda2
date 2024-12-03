import Login from './pages/Login';
import Register from './pages/Register';
import Store from './pages/Store';

const routes = [
  { path: '/', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/store', element: <Store /> },
];

export default routes;
