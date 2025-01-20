import React from 'react';
import'./SearchResList2.css'; 


const SearchResList2 = ({results,selectedvalue}) => {
  return (
    <div className='result-list'>
      {results.map((result,id)=>{
        return <div   className="slist" key={id}>{result.area}</div>;

      })
      }
    
    </div>
  )
}

export default SearchResList2
