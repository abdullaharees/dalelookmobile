import React, {useState} from 'react'

import infoprofm from "../pictures/infoprofm.svg"
import adsprofm from "../pictures/adsprofm.svg"
import heartprofm from "../pictures/heartprofm.svg"
import activerect from "../pictures/activerect.svg"

import Itemprof from './Itemprof'
import Favprof from './Favprof'
import Myadsm from './Myadsm'

const Itemchange = ({edit, setEdit, layout }) => {
  return (
    <div className='flex justify-center pt-10'>
      

      { layout === 1 ? (<>
        <Itemprof edit={edit} setEdit={setEdit} className='w-full' />
      </>) :

        layout === 2 ? (<>
          <Myadsm className='w-full' />
        </>) :
      
       layout === 3 ? (<>
      <Favprof />
      </>
      ): null}
    </div>
  )
}

export default Itemchange
