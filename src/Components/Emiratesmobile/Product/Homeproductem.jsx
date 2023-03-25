import React, { useState } from 'react'
import Backproductem from './Backproductem'
import Itemchangeproductem from './Itemchangeproductem'
import Taskbarproductem from './Taskbarproductem'
import Footerem from '../Footerem'

const Homeproductem = () => {
  const [edit, setEdit] = useState(false)
  const [layout, setLayout] = useState(1)

  return (
    <div className='pb-28'>
      <Backproductem edit={edit} setEdit={setEdit}/>
      <Taskbarproductem layout={layout} setLayout={setLayout}/>
      <Itemchangeproductem edit={edit} setEdit={setEdit} layout={layout} setLayout={setLayout}/>
      <Footerem />
    </div>
  )
}

export default Homeproductem
