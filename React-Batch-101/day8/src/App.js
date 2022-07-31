import './App.css';
import Footer from './component/Footer';
import Lifecycle from './component/Lifecycle';
import Navbar from './component/Navbar';
import ProductNextApi from './component/ProductNextApi';
import ProductsApi from './component/ProductsApi';
import Todo from './component/Todo';

function App() {
  return (
    <>
      <Navbar />
      {/* <ProductsApi /> */}
      {/* <ProductNextApi /> */}
      {/* <Lifecycle /> */}
      <Todo />
      <Footer />
    </>
  );
}

export default App;
