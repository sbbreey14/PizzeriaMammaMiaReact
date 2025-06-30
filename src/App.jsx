import { NavbarMenu } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Register } from './components/Register'
import { Login } from './components/Login'

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <>
      <NavbarMenu/>
      {/* <Home/> */}
      {/* <Register /> */}
      <Login />
      <Footer/>
    </>
  );
};