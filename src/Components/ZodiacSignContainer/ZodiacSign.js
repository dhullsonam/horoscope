import {useContext} from 'react';
import {UserContext} from '../../App.js';
import leo from '../../images/leo.jpeg';
import virgo from '../../images/virgo.jpg';
import  cancer from '../../images/cancer.jpg';
import taurus from '../../images/taurus.jpg';
import aries from '../../images/aries.jpg';
import aquarius from '../../images/aquarius.jpg';
import capricorn from '../../images/capricorn.jpg';
import gemini from '../../images/gemini.jpeg';
import libra from '../../images/libra.jpeg';
import pisces from '../../images/pisces.png';
import sagittarius from '../../images/sagittarius.jpeg';
import scorpio from '../../images/scorpio.jpeg';
import './ZodiacSign.css'


function ZodiacSignContainer() {
    const {user, setUser} = useContext(UserContext);
    const handleImage = (e) => {
        setUser(e)
   
    }
    return (
        <>
            <div className="conatainer">
                <div className='items'>
                    <img src={leo} onClick={() => handleImage('leo')} alt={"leo"}></img>
                    <img src={virgo} alt={"virgo"} onClick={() => handleImage('virgo')} ></img>
                    <img src={cancer} alt={"cancer"} onClick={() => handleImage('cancer')} ></img>
                    <img src={taurus} alt={"taurus"} onClick={() => handleImage('taurus')} ></img>
                    <img src={aries} alt={"aries"} onClick={() => handleImage('aries')} ></img>
                    <img src={aquarius} alt={"aquarius"} onClick={() => handleImage('aquarius')} ></img>
                    <img src={capricorn} alt={"capricorn"} onClick={() => handleImage('capricorn')} ></img>
                    <img src={gemini} alt={"gemini"} onClick={() => handleImage('gemini')} ></img>
                    <img src={libra} alt={"libra"} onClick={() => handleImage('libra')} ></img>
                    <img src={pisces} alt={"pisces"} onClick={() => handleImage('pisces')} ></img>
                    <img src={sagittarius} alt={"sagittarius"} onClick={() => handleImage('sagittarius')} ></img>
                    <img src={scorpio} alt={"scorpio"} onClick={() => handleImage('scorpio')} ></img>
                </div>

            </div>

        </>
    );
}

export default ZodiacSignContainer;