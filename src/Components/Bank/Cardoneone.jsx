import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


import creditcard from "../pictures/creditcard.svg"
import creditcardbl from "../pictures/creditcardbl.svg"
import paypal from "../pictures/paypal.svg"
import paypalw from "../pictures/paypal.svg"
import crcards from "../pictures/crcards.svg"
import q from "../pictures/q.svg"
import Cardtwo from './Cardtwo'
import Packagesone from './Packagesone'
import Packages from './Packages'




const Cardoneone = () => {
const [layout, setLayout] = useState(1)

  return (
    <div className='flex justify-center'>


  
      <div className='flex flex-col w-full justify-center'>

        <div className='flex items-center justify-center px-2 w-full text-2xl mt-14 arabic text-[#0092A0] mb-2'>
          اسم الصفحة <span className='font-bold mr-1'>( طرق الدفع )</span>
        </div>

        <div className='flex justify-center flex-col'>

          <div className='h-[45px] mt-[2rem] justify-center rounded-t-sm shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
            <div className='flex w-full mt-2.5 justify-center'>
              <div className='flex arabic justify-center'>
                <p className='text-md font-bold text-right mb-2 text-[#494949]'>قم باختيار طريقة الدفع المناسبة لك </p>
              </div>
            </div>
          </div>

          <div className='cursor-pointer bg-[#0092A0] h-[50px] mt-20 justify-end rounded-t-sm'>
            <div className='flex w-full mt-2.5 justify-end'>
              <div className='flex arabic justify-end mr-6'>
                <img className='relative w-[30px] ml-1' src={creditcard} alt="creditcard" />
                <p className='text-lg lg:text-xl font-bold mr-3 text-white text-right'>  طرق الدفع </p>
              </div>
            </div>
          </div>

          <div className='w-full mb-10 bg-white flex flex-col justify-center h-[32rem] xl:h-[26rem] rounded-b-sm object-cover shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>

            <div className='flex flex-col justify-center'>

              <div className="flex flex-col justify-center xl:flex-row items-center mt-4 mb-3">

                <div
                onClick={(e) => {
                  e.preventDefault();
                  setLayout(2);
                  }}
                className={`cursor-pointer w-[40%]  xl:w-[19.5%]   h-[37px] mt-2 mr-0 xl:mr-5 rounded-md flex justify-center arabic ${(layout === 2)? 'bg-[#0092A0] text-white ' : 'bg-[#F7F7F8] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'}`}> 
                  <p className={`text-sm text-right font mb-2 font-bold text-[10px] lg:text-[12.5px] mt-2 ${(layout === 2)? 'text-white' : 'text-black'}`}> 
                    بطاقة باي بال </p>
                    {
                  layout === 2 ? 
                  <img className={`w-[25px] mr-3 ml-1 `}
                  src={paypalw} alt="paypal" /> :
                  <img className={`w-[25px] mr-3 ml-1 `}
                  src={paypal} alt="paypal" />  
                } 
                </div>

                <div
                  onClick={(e) => {
                  e.preventDefault();
                  setLayout(1);
                  }}
                  className={`cursor-pointer w-[40%]  xl:w-[19.5%] h-[37px] mt-3 xl:mt-2 ml-0 xl:ml-8 rounded-md flex justify-center arabic ${(layout === 1)? 'bg-[#0092A0] text-white ' : 'bg-[#F7F7F8] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'}`}>
                  <p className={`text-sm text-right font-bold mb-2 text-[10px] lg:text-[12.5px] mt-2 ${(layout === 1)? 'text-white' : 'text-black'}`}> 
                    بطاقة إئتمانية </p>
                    {
                  layout === 2 ? 
                  <img className={`w-[25px] mr-3 ml-1 `}
                  src={creditcardbl} alt="creditcardbl" /> :
                  <img className={`w-[25px] mr-3 ml-1 `}
                  src={creditcard} alt="creditcard" />  
                } 
                </div>

              </div>

              { layout === 1 ? (<>
              <div
              
                className='flex flex-col justify-center items-center'>

                <p className='text-xs font-bold text-[#333333] mt-3 mb-2 flex arabic'>اسم حامل البطاقة*</p>

                <div className='bg-[#F7F7F8] rounded flex justify-center w-[20rem] xl:w-[30rem] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                  <input className='outline-none bg-transparent border-[#9F9F9F] py-2 px-2 place-items-center mt-.9 w-full arabic rounded-l-sm text-xs text-[#737373]'
                    type="text"
                    placeholder=' اكتب اسم حامل البطاقة'></input>
                </div>

              </div>


              <div className='flex flex-col justify-center items-center arabic'>

                <p className='text-xs font-bold text-[#333333] mt-3 mb-2 flex arabic'>رقم البطاقة*</p>

                <div className='bg-[#F7F7F8] rounded flex justify-center w-[20rem] xl:w-[30rem] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                  <input className='outline-none bg-transparent border-[#9F9F9F] py-2 px-2 place-items-center mt-.9 w-full arabic text-sm'
                    type="text"
                    placeholder='اسم المستخدم'></input>
                  <div className='text-xs flex border-[1px] px-1 border-[#9F9F9F] rounded-l-md bg-white'>
                    <img className='w-[60px] ml-3 cursor-pointer' src={crcards} alt="crcards" />
                  </div>
                </div>

              </div>

              <div className='flex flex-col xl:flex-row justify-center arabic pb-10'>

                <div className='flex flex-col justify-center items-center'>

                  <p className='text-xs font-bold text-[#333333] mt-3 mb-2 flex arabic'>سنة الانتهاء*</p>

                  <div className='bg-[#F7F7F8] rounded flex justify-center w-[20rem] xl:w-[9.5rem] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                    <input className='outline-none bg-transparent border-[#9F9F9F] py-2 px-2 place-items-center mt-.9 w-full arabic rounded-l-sm text-xs text-[#737373]'
                      type="text"
                      placeholder='اكتب سنة انتهاء البطاقة'></input>
                  </div>

                </div>

                <div className='flex flex-col justify-center items-center mr-0 xl:mr-3'>

                  <p className='text-xs font-bold text-[#333333] mt-3 mb-2 flex arabic'>شهر الانتهاء*</p>

                  <div className='bg-[#F7F7F8] rounded flex justify-center w-[20rem] xl:w-[9.5rem] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                    <input className='outline-none bg-transparent border-[#9F9F9F] py-2 px-2 place-items-center mt-.9 w-full arabic rounded-l-sm text-xs text-[#737373]'
                      type="text"
                      placeholder='اكتب شهر انتهاء البطاقة'></input>
                  </div>

                </div>

                <div className='flex flex-col justify-center items-center mr-0 xl:mr-3'>

                  <div className='flex arabic'>
                    <p className='text-xs font-bold text-[#333333] mt-3 mb-2 flex arabic'>رمز الأمان CVV *</p>
                    <img className='w-[8px] mr-1 ml-3 cursor-pointer' src={q} alt="q" />
                  </div>

                  <div className='bg-[#F7F7F8] rounded flex justify-center w-[20rem] xl:w-[9.5rem] shadow-[rgba(0,_0,_0,_0.2)_0px_2px_5px]'>
                    <input className='outline-none bg-transparent border-[#9F9F9F] py-2 px-2 place-items-center mt-.9 w-full arabic rounded-l-sm text-xs text-[#737373]'
                      type="text"
                      placeholder='رمز الأمان خلف البطاقة'></input>
                  </div>

                </div>

              </div>

              </>) :

      layout === 2 ? (<>
        <Cardtwo />
    </>):

      layout === 3 ? (<>
      <Packagesone />
    </>): null} 

                  {/* <Link to='/packages'>
                    <div
                      className='flex justify-center'>

                          <text className='py-1 px-10 mt-2 text-sm font-bold shadow-lg bg-[#0092A0] rounded-full text-white text-center cursor-pointer'>
                          رجوع</text>
                    </div>
                  </Link >   */}
            </div>



          </div>

        </div>


      </div> 

    </div>




  )
}

export default Cardoneone
