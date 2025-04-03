import React from 'react';
import'../SearchBar1/SearchResList.css'; 


const SearchResList = ({results,selectedvalue}) => {
  return (
    <div className='resultlist'>
      {results.map((result,id)=>{
        return <div  onClick ={(e)=>selectedvalue(result)} className="slist" key={id}>{result.area}</div>;

      })
      }
    
    </div>
  )
}

export default SearchResList
