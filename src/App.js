import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './Componentes/NavBar';
import ItemlistContainer from './Componentes/ItemDetailContainer';
import ItemDetail from './Componentes/ItemDetail'
import SearchBar from './Componentes/SearchBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<ItemlistContainer />}></Route>
        <Route path="/Adidas/:idZapatillas" element={<ItemDetail/>}></Route>
        <Route path="/marca/:productId" element={<ItemlistContainer />}></Route>
        <Route path="/SearchBar/:idZapatillas" element={<SearchBar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
