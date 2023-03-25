import React, { useState } from 'react'
import Backprofem from './Backprofem'
import Itemchangeem from './Itemchangeem'
import Taskbarprofem from './Taskbarprofem'
import Footerem from '../Footerem'

const Homeprofileem = () => {
  const [edit, setEdit] = useState(false)
  const [layout, setLayout] = useState(1)

  return (
    <div className='pb-28'>
      <Backprofem edit={edit} setEdit={setEdit}/>
      <Taskbarprofem layout={layout} setLayout={setLayout}/>
      <Itemchangeem edit={edit} setEdit={setEdit} layout={layout} setLayout={setLayout}/>
      <Footerem />
    </div>
  )
}

export default Homeprofileem
