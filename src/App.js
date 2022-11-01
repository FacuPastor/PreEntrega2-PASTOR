import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './Componentes/NavBar';
import ItemlistContainer from './Componentes/ItemDetailContainer';
import SearchBar from './Componentes/SearchBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemlistContainer />}></Route>
        <Route path="/marca/:cat" element={<ItemlistContainer />}></Route>
        <Route path="/SearchBar/:idZapatillas" element={<SearchBar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
