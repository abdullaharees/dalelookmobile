import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'

import { Link, useNavigate } from 'react-router-dom'

export default function Loginpopup() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer w-[9rem]  mt-6 rounded-full flex justify-center shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] 
        text-sm font-bold bg-[#0092A0] text-[white] text-center py-1 px-5 border-[2px] border-[#0092A0]
         mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
      ارسال رمز التحق    

      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" text-center items-center p-5 border-b border-solid border-slate-200 rounded-t bg-[#0092A0]">
                  
                  
                </div>
                {/*body*/}
                <div className="relative px-[2rem] py-[1.5rem] flex-auto w-full">
                  
                  <p className="my-2 text-[#707070] font-bold text-lg leading-relaxed  text-center">  
                  أدخل رمز التحقق</p>
                  <div className="flex space-x-3 w-full mt-[2rem]">
                  <div className=" text-[#707070] py-1 px-3 border-[1px] border-slate-300 rounded text-3xl">1</div>
                  <div className=" text-[#707070] py-1 px-3 border-[1px] border-slate-300 rounded text-3xl">9</div>
                  <div className=" text-[#707070] py-1 px-3 border-[1px] border-slate-300 rounded text-3xl">8</div>
                  <div className=" text-[#707070] py-1 px-3 border-[1px] border-slate-300 rounded text-3xl">9</div>

                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center ">
                  
                  <Link to="/">
                    <button
                      className="bg-[#0092A0] mb-[2rem] text-[white] font-bold uppercase text-sm py-1 px-10 rounded-full"
                      type="button"
                      // onClick={() => setShowModal(false)}
                    >
                      تأكيد
                    </button>
                  </Link>
                  
                  
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