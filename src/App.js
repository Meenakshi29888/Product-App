import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import ShoppingCartView from './components/ShoppingCartView';

function App() {
  return (
    <div>
     <AddProduct />
     <SearchProduct />
     <ShoppingCartView />
    </div>
  );
}

export default App;
