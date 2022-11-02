import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getZapatillasById } from "../APIrest/productos";

const SearchBar = () => {
    const { idZapatillas } = useParams();

    const [zapatillas, setZapatillas] = useState({});

    useEffect(() => {
        setZapatillas(getZapatillasById(idZapatillas));
    }, []);

    return <div>{zapatillas.marca}</div>;
    };

export default SearchBar;