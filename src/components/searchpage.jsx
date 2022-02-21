import { useEffect, useState } from "react"
import { Navbar } from "./NavBar"


export const Search = () =>{

    const [product,setProduct] = useState([]);

    useEffect((
        fetch('https://fast-reef-22226.herokuapp.com/data')
            .then(res=>res.json())
            .then((res) => setProduct(res))
    ),[])
 
    return (
        <div>
            <Navbar/>
            <div >
                <button id="sort-alphabetically">Sort A-Z</button>
                <button id="sort-alphabetically-desc">Sort Z-A</button>
                <button id="sort-by-date">Sort by Date(asc)</button>
                <button id="sort-by-date-desc">Sort by Date(dec)</button>
                <button id="sort-by-quality">Sort by quality(asc)</button>
                <button id="sort-by-quality-desc">Sort by quality(dec)</button>
                <button id="filter-explicit">Filter Explicit</button>
            </div>
            <div>
                {product.map((el) => (
                    <li>
                        <a href={el.url}>{el.title}</a>
                    </li>
                ))}
            </div>
        </div>
    )
}