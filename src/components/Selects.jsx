import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import KeyWest from '../assets/keywest.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'  
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard img = {Maldives} name= {"Maldives"} />
        <SelectsCard img = {Maldives2} name= {"Antigua"} />
        <SelectsCard img = {Maldives3} name= {"Thailand"} />
        <SelectsCard img = {BoraBora} name= {"Bali"} />
        <SelectsCard img = {BoraBora2} name= {"Cozumel"} />
        <SelectsCard img = {KeyWest} name= {"Keywest"} />
      
    </div>
  )
}

export default Selects
