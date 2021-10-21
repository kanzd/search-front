import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Search from "./component/Search/index";
import Add from "./component/Add/index";
function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path = "/">
        <Search />
      </Route>
      <Route exact path="/add">
        <Add />
      </Route>
    </BrowserRouter>


    </>
  );
}

export default App;
