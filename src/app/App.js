import HomePage from "../pages/home";
import {Route, Routes,} from "react-router-dom";
import Customer from "../pages/customer";
import Item from "../pages/item";


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='Customer' element={<Customer/>}/>
        <Route path='Item' element={<Item/>}/>
      </Routes>
  );
}


export default App;
