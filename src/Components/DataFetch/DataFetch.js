
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App.js';
import Popup from '../ResultedView/popup.js';

function DataFetch() {
    const { user } = useContext(UserContext);
      const [zodiacData, setZodiacData] = useState([])

    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Host", "sameer-kumar-aztro-v1.p.rapidapi.com");
    myHeaders.append("X-RapidAPI-Key", "5a38517049msh4a7c31ddf633473p168e71jsn4a9de2b101c3");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };


    useEffect(() => {
        if(user !== ""){
            console.log(user)
        fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${user}&day=today`,requestOptions)
            .then(response => response.json())
            .then(result => setZodiacData(result))
            .catch(error => console.log('error', error));
        }
        // eslint-disable-next-line
    }, [user])

    return (
        <>
         <Popup zodiacData={zodiacData} horoscopeSign ={user}/> 
        
        </>
    );
}

export default DataFetch;