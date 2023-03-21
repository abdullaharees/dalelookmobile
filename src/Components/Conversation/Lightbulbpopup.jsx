import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'
import lightbulb from "../pictures/lightbulb.svg"
import bulbnotif from "../pictures/bulbnotif.svg"
import mall from "../pictures/mall.svg"
import addusernotif from "../pictures/addusernotif.svg"
import eye from "../pictures/eye.svg"
import paying from "../pictures/paying.svg"

export default function Lighbulbpopup() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer w-full h-[31px] ml-1 mr-2 mt-1 rounded-lg flex justify-end ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
              <img className="w-[0.7rem] mr-1.5 ml-2 mt-2" src={lightbulb} alt="convow" />
                </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="justify-center rounded-sm shadow-lg relative flex flex-col w-full bg-white ">
                {/*header*/}

                <div className="flex justify-center py-2 w-full bg-[#0092A0] rounded-t-sm">
                    <img className="w-[3rem]" src={bulbnotif} alt="bulbnotif" />
                </div>

                <div className="flex text-center justify-center items-center w-[20rem] rounded-sm">
                    <div className="flex flex-col justify-center w-full">
                        <h3 className="text-xs mb-3 mt-3 font-semibold text-center text-[#0092A0]">
                        نصائح هامة للسلامة </h3>

                        <div className="flex justify-center mt-1">
                            <p className="text-[0.65rem] text-right w-[14rem] mr-4">تجتمع فقط في الأماكن العامة / المزدحمة مثل محطات
                            المترو ومراكز التسوق</p>
                            <img className="w-[2rem] mr-" src={mall} alt="mall" />

                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-[85%] mt-1 mb-3'></div>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-[0.6rem] text-right w-[14rem] mr-4">لا تذهب بمفردك لمقابلة بائع / مشتري ، اصطحب معك دائمًا
                        شخصًا ما.</p>
                            <img className="w-[2rem] mr-" src={addusernotif} alt="addusernotif " />

                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-[85%] mt-1 mb-4'></div>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-[0.6rem] text-right w-[14rem] mr-4">تحقق من المنتج وافحصه بشكل صحيح قبل شرائه.</p>
                            <img className="w-[2rem] mb-1" src={eye} alt="eye" />

                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-[85%] mt-1 mb-3.5'></div>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-[0.6rem] text-right w-[14rem] mr-4">لا تدفع أبدًا أي شيء مقدمًا أو تقوم بتحويل الأموال قبل
                        فحص المنتج</p>
                            <img className="w-[1.2rem] mr-" src={paying} alt="paying" />

                        </div>
                        <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-[85%] mt-1 mb-1'></div>
                        </div>

                    </div>  
                </div>
                
                {/*footer*/}
                <div className="mt-4 mb-1 flex items-center justify-center p-2  rounded-sm">
                  
                  <button
                    className="bg-[#0092A0] text-white font-bold uppercase text-xs px-16 py-2 rounded-full"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    تابع المحادثة
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}