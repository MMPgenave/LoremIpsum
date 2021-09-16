import CreateNewProduct from "./CreateNewProduct";
import DataProvider from "./DataProvider";
import Products from "./Products";
import './style.css';
import mydata from './data';
import Inputs from "./Inputs";
function App() {


//Store data in LocalStorage
  if (!localStorage.getItem("mydata")) {
    localStorage.setItem("mydata", mydata);
  }

  return (
    <div className="input_container">
      <Inputs />
    </div>
  );
}

export default App;
