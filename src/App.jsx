
{/* Importacion de componentes */}
import { NavbarMenu } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Cart } from './components/Cart'

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <>
      <NavbarMenu/>
      {/* <Home/> */}
      <Cart />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer/>
    </>
  );
};