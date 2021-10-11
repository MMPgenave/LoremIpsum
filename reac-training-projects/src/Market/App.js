import DataProvider from "./DataProvider";
import "./style.css";
import mydata from "./data";
import Inputs from "./Inputs";
import ProductsShower from "./ProductsShower";
import GroupSelector from "./GroupSelector";
import CreateNewGroup from "./CreateNewGroup";

function App() {
  //Store data in LocalStorage
  if (!localStorage.getItem("mydata")) {
    localStorage.setItem("mydata", mydata);
  }

  return (
    <>
      <h1>super market</h1>
      <div className="TitleUnderline"></div>
      <div className="main_container">
        <DataProvider>
          <div className="InputsAndCrateNewGroup_container">
            <GroupSelector />
            <Inputs />
          </div>

          <CreateNewGroup />
          <ProductsShower />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
