import logo from './logo.svg';
import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/funcComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Inventory Form by Reactjs</h1>
        <AddProduct/>

      </header>
    </div>
  );
}

export default App;
