import React, {useState} from 'react'


import creditcard from "../pictures/creditcard.svg"
import paypal from "../pictures/paypal.svg"
import paypalw from "../pictures/paypalw.svg"
import Cardoneone from './Cardoneone'
import Packagesone from './Packagesone'



const Cardtwo = () => {

  return (
<div className='flex w-full justify-center'>


    <div className='flex flex-col w-full justify-center'>



                    <div className='flex justify-center mt-[2rem] mb-[7rem]'>

                        <div className='cursor-pointer bg-[#0092A0] w-[70%] h-[37px] rounded-md flex justify-center arabic mt-[14rem]'>
                            <p className='text-white text-right font-bold mb-2 text-[10px] mt-3'> التحويل إلى حساب الباي بال  </p>
                            <img className='w-[15px] mr-3 ml-1 cursor-pointer' src={paypalw} alt="paypalw" />
                        </div>

                    </div>

                   
                    

                </div>
                
       

</div>            
  )
}

export default Cardtwo
