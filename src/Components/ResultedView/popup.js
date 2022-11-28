
import './popup.css';


function Popup(props) {
    const { zodiacData } = props;

    return (
        <div className='main'>
            
            {
                zodiacData !== ""  ?

                    <div className='holder'>
                        <h1>{props.horoscopeSign}</h1>
                        <p> Date Range : {zodiacData.date_range}</p>
                        <p> Lucky color : {zodiacData.color}</p>
                        <p>compatibility with : {zodiacData.compatibility}</p>
                        <p>lucky-number : {zodiacData.lucky_number}</p>
                        <p>Mood : {zodiacData.mood}</p>
                        <h3> {zodiacData.description}</h3>

                    </div>

                    :
                    <span></span>
            }
        </div>
    );
}

export default Popup;