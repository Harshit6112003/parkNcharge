import { useState } from 'react';
import SearchBar2 from '../Components/SearchBar2/SearchBar2';

import SearchResList2 from '../Components/SearchBar2/SearchResList2';
import ShowChargers from '../Components/Showchargers';

import '../Css/Screen2.css';

function App() {

  const [results, setResults] = useState([]);
//   const [data,setData] =useState([]);
  
  

  

  

//   const selectedvalue=(result)=>{
//     setData(result);
    
//   }




   
  


  return (
    <div className="App">
      <div className='Head'>
        <h1>Find a charger near you!  </h1>
      </div>
      <div className='SearchBarContainer'>
        <SearchBar2 setResults={setResults} />
        <SearchResList2 results={results} />
      </div>
      <div>
        <ShowChargers  results={results}/>
      </div>
     
     


      


    </div>
  );
}


export default App;


