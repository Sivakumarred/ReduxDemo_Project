
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
// import { Routes ,Route } from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <Routes>
        {/* <ProductListing /> */}
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
       
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
