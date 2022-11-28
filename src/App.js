
import './App.css';
import SearchWithHoroSign from './Components/HoroscopeSign/SearchWithHoroSign';
import { useState, createContext, useEffect } from 'react';
import ZodiacSignContainer from './Components/ZodiacSignContainer/ZodiacSign';
import DataFetch from './Components/DataFetch/DataFetch';
import Loader from './loader/ImageLoader';


export const UserContext = createContext();



function App() {

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
     
    <div className="App">
    
      
      {
        loading ? <Loader /> :

          <UserContext.Provider value={{ user, setUser }}>
            <SearchWithHoroSign />
            <ZodiacSignContainer signName={setUser} />
            <DataFetch />
            {/* {user} */}
          </UserContext.Provider>
      }
    </div>
  );
}

export default App;
