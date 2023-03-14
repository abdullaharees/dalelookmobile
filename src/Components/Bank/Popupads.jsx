import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'

import { Link, useNavigate } from 'react-router-dom'

export default function Popupads() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer mt-6 mb-12 rounded-full flex justify-end shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] 
        text-xs font-bold bg-[#0092A0] text-white text-center py-1 px-5 border-[2px] border-[#0092A0]"
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
            <div className="relative my-6 mx-auto w-[15rem]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" text-center items-center p-1 border-b border-solid border-slate-200 rounded-t bg-[#0092A0]">
                  <h3 className="text-xl font-semibold text-center text-white ">
                  تنويه                  
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-2 text-slate-500 text-lg leading-relaxed text-center">
                  تلقينا طلب إعلانكم
                  </p>
                  <p className="my-2 text-slate-500 text-lg leading-relaxed  text-center">الإعلان قيد المراجعة
                  </p>
                  <p className="my-2 text-slate-500 text-lg leading-relaxed  text-center"> شكراً لكم</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                  
                  <Link to="/">
                    <button
                      className="bg-[#0092A0] text-white font-bold uppercase text-sm py-1 px-10 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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