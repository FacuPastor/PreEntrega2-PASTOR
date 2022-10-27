import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment } from 'react';
import NavBar from './Componentes/NavBar';
import Item from './Componentes/Item';
import ItemlistContainer from './Componentes/ItemListContainer';
import Itemlist from './Componentes/ItemList';

function App() {
  return (
    <>
    <NavBar/>
    <ItemlistContainer/>

    </>
  );
}

export default App;
