import React from 'react'

function Length({ whichSection, count }) {
  return (
    <div className=' flex flex-row text-center justify-center'>
      <h2>{whichSection}</h2>
      <h2 className='mx-2'>{count} </h2>
    </div>
  )
}

export default Length
