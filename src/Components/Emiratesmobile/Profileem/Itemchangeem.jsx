import React, {useState} from 'react'

import Favprofem from './Favprofem'
import Itemprofem from './Itemprofem'
import Myadsmem from './Myadsmem'

const Itemchangeem = ({edit, setEdit, layout }) => {
  return (
    <div className='flex justify-center pt-3'>
      

      { layout === 1 ? (<>
        <Itemprofem edit={edit} setEdit={setEdit} className='w-full' />
      </>) :

        layout === 2 ? (<>
          <Myadsmem className='w-full' />
        </>) :
      
       layout === 3 ? (<>
      <Favprofem />
      </>
      ): null}
    </div>
  )
}

export default Itemchangeem
