import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './styles/global.scss'
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Todo from './pages/notes/Todo';

function App() {


  const Layout = () => {
    return (
      <div className='main'>
        <Navbar />
        <div className='container'>
          <div className='menuContainer'>
            <Menu />
          </div>
          <div className='contentContainer'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );

  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/notes",
      element:<Todo/>
    }

  ])

  return <RouterProvider router={appRouter} />
}

export default App;
