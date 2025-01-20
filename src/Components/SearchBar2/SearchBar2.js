import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '/home/ryuk/reactapp/sparkncharge/src/Components/SearchBar2/SearchBar2.css';



const SearchBar2 = ({setResults}) => {
 
  const [input,setInput] = useState("");

  const fetchData=(value)=>{
    fetch('./chargers.json')
    .then((res) => res.json())
    .then((data)=>{
      const results = data.filter((user)=>{
        return user && value && ((  user.area.toLowerCase().includes(value) )||(user.pincode && user.pincode.includes(value)))
      });
      setResults(results)
    });
  }

 

  const changeHandler =(value)=>{
      setInput(value);
      fetchData(value);
  }
  

  return (
    <div className='search-bar'>
      <FaSearch className="Search-icon"/>
      <input placeholder='Enter the location or pincode' value={input} onChange={(e)=>changeHandler(e.target.value)}/>
    </div>
  )
}

export default SearchBar2
