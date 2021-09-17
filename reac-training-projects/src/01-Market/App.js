import DataProvider from "./DataProvider";
import './style.css';
import mydata from './data';
import Inputs from "./Inputs";
import ProductsShower from "./ProductsShower";
import GroupSelector from './GroupSelector';
import CreateNewGroup from './CreateNewGroup';

function App() {


//Store data in LocalStorage
  if (!localStorage.getItem("mydata")) {
    localStorage.setItem("mydata", mydata);
  }

  return (
    <DataProvider>
      <GroupSelector />
      <CreateNewGroup />

      <Inputs />
      <ProductsShower />
    </DataProvider>
  );
}

export default App;
