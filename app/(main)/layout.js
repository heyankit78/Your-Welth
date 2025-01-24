import React from 'react'

const Mainlayout = ({children}) => {
  return (
    <div className='mx-auto container my-32'>
        {children}
    </div>
  )
}

export default Mainlayout
