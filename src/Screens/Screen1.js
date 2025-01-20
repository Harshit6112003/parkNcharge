import { useState,useEffect } from 'react';
import SearchBar from '../Components/SearchBar1/SearchBar';
import '/home/ryuk/reactapp/sparkncharge/src/Css/Screen1.css'
import SearchResList from '../Components/SearchBar1/SearchResList';


function App() {

  const [results, setResults] = useState([]);
  const [data,setData] =useState([]);
  const [cusname,setcusName] =useState('');
  const [address,setAddress] =useState('');
 
  const [lst, setLst] = useState([]);
  

  useEffect(() => {
    console.log('Updated list:', lst);
  }, [lst]);



  const lstcreate = (e) => {
    e.preventDefault(); // Prevent form submission

    
      const obj1 = {
        fname: cusname,
        address: address,
        area: data.area,
        pincode: data.pincode,
      };
      
      setLst([...lst, obj1]); // Add the new object to the list
      console.log(lst); // Check the updated list in the console

      alert(`Hello ${cusname}, you have successfully registered!`);

      // Optionally reset input fields after submission
      setcusName('');
      setAddress('');
      setData({});




    
  };
  

  

  const selectedvalue=(result)=>{
    setData(result);
    
  }




   
  


  return (
  <div className='container'>
    <div className="App">
      <div className='Head'>
        <h1>Enter the details to get you started  </h1>
      </div>
      <div className='SearchBarContaine'>
        <SearchBar setResults={setResults} />
        <SearchResList results={results} selectedvalue={selectedvalue} />
      </div>
     
     


      <div className='charger-details'>
        <form onSubmit={lstcreate}>
          <label for="fname">FullName:</label>
          <input type="text" id="fname" name="fname" value={cusname} onChange={(e)=>setcusName(e.target.value)}/>
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
          <label for="area">Area</label>
          <input type="text" id="area" name="area" value={data.area || ''} />
          <label for="pincode">Pincode</label>
          <input type="text" id="pincode" name="pincode" value={data.pincode || ''}/>

          <input type="submit" value="Submit"  />
        </form>
        

      </div>


    </div>
    </div>
  );
}


export default App;


