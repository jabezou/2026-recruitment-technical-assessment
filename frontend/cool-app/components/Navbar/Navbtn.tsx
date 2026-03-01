import React from 'react'

const Navbtn = ({ children, isFilled }) => {
  return (
    <div className={`border-orange-500 border rounded-sm p-1.5 ${isFilled ? 'bg-orange-500 text-white' : 'bg-white'}`}>
      {children}
    </div>
  )
}

export default Navbtn