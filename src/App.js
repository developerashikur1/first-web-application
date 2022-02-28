import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Customers from './components/AdminDashboard/Customers/Customers';
import Products from './components/AdminDashboard/Ecommerce/Products/Products';
import ProductsCart from './components/AdminDashboard/Ecommerce/ProductsCart/ProductsCart';
import MainDashboard from './components/AdminDashboard/MainDashboard/MainDashboard';
import AuthProvider from './components/Shared/Contexts/AuthProvider';
import Login from './components/Shared/Login/Login';
import PrivateOutlet from './components/Shared/PrivateOutlet/PrivateOutlet';
import Register from './components/Shared/Register/Register';
import ResetPassword from './components/Shared/ResetPassword/ResetPassword';


function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<AdminDashboard></AdminDashboard>}></Route> */}
          <Route path="/*" element={<PrivateOutlet></PrivateOutlet>}>
            <Route path='' element={<AdminDashboard></AdminDashboard>}>
              <Route path='' element={<MainDashboard></MainDashboard>}></Route>
              <Route path='customers' element={<Customers></Customers>}></Route>
              <Route path='products' element={<Products></Products>}></Route>
              <Route path='productsCart' element={<ProductsCart></ProductsCart>}></Route>
              <Route path='resetPassword' element={<ResetPassword></ResetPassword>}></Route>
            </Route>
          </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;




