import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'

import { Link, useNavigate } from 'react-router-dom'

export default function Popupcloseem() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer w-[8rem]  mt-6 rounded-full flex justify-center shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] 
        text-sm font-bold bg-[#FFCC00] text-[#333333] text-center py-1 px-5 border-[2px] border-[#FFCC00]
        hover:shadow-lg hover:text-[#FFCC00] hover:border-[#FFCC00] hover:border-2  mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >

                        نشر الإعلان
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
                <div className=" text-center items-center p-1 border-b border-solid border-slate-200 rounded-t bg-[#FFCC00]">
                  <h3 className="text-xl font-semibold text-center text-[#333333] ">
                  تنويه                  
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative px-[2rem] py-[1rem] flex-auto">
                  <p className="my-2 text-slate-500 text-lg leading-relaxed text-center">
                  تهانينا لقد تم إرسال الطلب بنجاح
                  </p>
                  <p className="my-2 text-slate-500 text-lg leading-relaxed  text-center">
                  الطلب قيد المراجعة
                   </p>
                  <p className="my-2 text-slate-500 text-lg leading-relaxed  text-center">  
                  شكراً لكم</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                  
                  <Link to="/homem">
                    <button
                      className="bg-[#FFCC00] text-[#333333] font-bold uppercase text-sm py-1 px-10 rounded-full  mb-1 "
                      type="button"
                      // onClick={() => setShowModal(false)}
                    >
                      إغلاق
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