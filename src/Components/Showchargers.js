import React from 'react'
import './Showcharge.css'
const Showchargers = ({ results }) => {
    return (
        <div className='resultlist'>
            <div>
                available chargers near you
            </div>
            {results.map((result, id) => {
                return <div className="slist" key={id}>
                   <h1> {result.fname}</h1>
                   <h1> {result.address}</h1>
                   <h1> {result.area}</h1>
                   <h1>{result.pincode}</h1> 
                </div>;

            })
            }

        </div>
    )
}

export default Showchargers
