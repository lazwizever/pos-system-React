import HomePage from "../pages/home";
import {Route, Routes,} from "react-router-dom";
import Customer from "../pages/customer";


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='Customer' element={<Customer/>}/>
      </Routes>
  );
}


export default App;
