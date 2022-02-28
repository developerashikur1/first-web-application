import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Customers from './components/AdminDashboard/Customers/Customers';
import Products from './components/AdminDashboard/Ecommerce/Products/Products';
import ProductsCart from './components/AdminDashboard/Ecommerce/ProductsCart/ProductsCart';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path='/admindashboard' element={<AdminDashboard></AdminDashboard>}>
        </Route>
          <Route path='/customers' element={<Customers></Customers>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/productsCart' element={<ProductsCart></ProductsCart>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;




