import React, { useState } from 'react'
import Backprof from './Backprof'
import Itemchange from './Itemchange'
import Taskbarprof from './Taskbarprof'
import Itemprof from './Itemprof'
import Footer from '../Footer'

const Homeprofilem = () => {
  const [edit, setEdit] = useState(false)
  const [layout, setLayout] = useState(1)

  return (
    <div className='pb-28'>
      <Backprof edit={edit} setEdit={setEdit}/>
      <Taskbarprof layout={layout} setLayout={setLayout}/>
      <Itemchange edit={edit} setEdit={setEdit} layout={layout} setLayout={setLayout}/>
      <Footer />
    </div>
  )
}

export default Homeprofilem
