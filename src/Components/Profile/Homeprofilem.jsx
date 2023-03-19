import React, { useState } from 'react'
import Backprof from './Backprof'
import Itemchange from './Itemchange'
import Taskbarprof from './Taskbarprof'
import Itemprof from './Itemprof'

const Homeprofilem = () => {
  const [edit, setEdit] = useState(false)

  return (
    <div>
      <Backprof edit={edit} setEdit={setEdit}/>
      <Taskbarprof />
      <Itemchange edit={edit} setEdit={setEdit}/>
    </div>
  )
}

export default Homeprofilem
