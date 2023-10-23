import React from 'react'
import loadings from './loadings.gif';

 const Spinner=()=> {
    return (
      <div className='text-center'>
        <img  className="my-3" src={loadings}  alt="loading" />
      </div>
    )
}
export default Spinner;
