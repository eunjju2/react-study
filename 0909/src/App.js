import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Root from './components/Root';
import ProductInfo from './pages/ProductInfo';

const router = createBrowserRouter([
  {
  path: "/",
  element: <Root />,
  errorElement: <NotFound />,
  children: [
    { index: true, element: <Home /> },
    { path: "/product", element: <Product /> },
    { path : '/product/:productId', element: <ProductInfo />}
    ],
  }
  ]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
