import { useState,useContext } from "react";
import {UserContext} from '../../App.js';
import './searchBar.css';

function SearchWithHoroSign() {

    const [zodiacSign, setZodiacSign] = useState("")
    const {user, setUser} = useContext(UserContext);

    const SearchForZodiacSign = () => {
        setUser(zodiacSign)
        console.log(user)
    }
    return (
        <>
         <h1>Start Your Day with Daily Horoscope </h1>
        <div className="searchContainer">
           
            <input type={"text"} placeholder="Enter your Zodiac Sign" onChange={(e) => setZodiacSign(e.target.value)} />
            <button onClick={SearchForZodiacSign} >click</button>
            {/* if input field is empty can also use disabled={!zodiacSign} property on button */}
        </div>
        </>

    );
}

export default SearchWithHoroSign;

