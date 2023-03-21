import React, { useState } from 'react'
import Backprof from './Backprof'
import Itemchange from './Itemchange'
import Taskbarprof from './Taskbarprof'
import Itemprof from './Itemprof'
import Footer from '../Footer'

const Homeprofilem = () => {
  const [edit, setEdit] = useState(false)

  return (
    <div className='pb-28'>
      <Backprof edit={edit} setEdit={setEdit}/>
      <Taskbarprof />
      <Itemchange edit={edit} setEdit={setEdit}/>
      <Footer />
    </div>
  )
}

export default Homeprofilem
