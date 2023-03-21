import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'
import deleteconvo from "../pictures/deleteconvo.svg"

export default function Deleteconvo() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer w-[87%] h-[31px] ml-1 mr-2 mt-1 rounded-t-sm flex justify-end ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
              <img className="w-[0.8rem] mr-3 ml-3 mt-2" src={deleteconvo} alt="deleteconvo" />
                </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex text-center justify-center items-center p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold text-center ml-5">
                  هل انت متأكد من إغلاق الحساب؟ 
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                
                {/*footer*/}
                <div className="flex items-center justify-center p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    تراجع 
                  </button>
                  <button
                    className="bg-[#0092A0] text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    نعم
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