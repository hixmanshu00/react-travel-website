import React from 'react'

const SelectsCard = (props) => {
  return (
        <div className="relative">
            <img className='w-full h-full object-cover' src={props.img} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 h-full w-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">{props.name}</p>
            </div>
        </div>
  )
}

export default SelectsCard
