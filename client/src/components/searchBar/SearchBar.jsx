/// IMPORTS
import { useState } from "react";
import { useDispatch } from "react-redux";
// COMPONENTS

// ACTIONS
import { getCountryByName, clearState } from "../../redux/actions/actions";
// STYLES
import style from "./SearchBar.module.css";

// SEARCHBAR
export default function SearchBar(){
    // LOCAL STATES
    const [name, setName] = useState("")
    // HANDLERS
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        e.preventDefault();
        let input = e.target.value;
        setName(input);
    };
    const handleSearch = () => {
        dispatch(getCountryByName(name));
    };
    const handleClear = (e) => {
        e.preventDefault();
        dispatch(clearState());
    };

    return (
        <div> 
            <button className={style.bigButton} onClick={handleClear}>↩</button>
            <input className={style.bar} type='search' value={name} onChange={handleOnChange}/>
            <button className={style.button}onClick={handleSearch}>Search</button>
        </div>
    );
}
