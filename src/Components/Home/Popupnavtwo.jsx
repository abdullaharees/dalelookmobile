import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'

export default function Popupnavtwo() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer w-full flex justify-start"
        type="button"
        onClick={() => setShowModal(true)}
      >
                <p className="ml-[5rem]">كن 
                وكيلنا</p>
                </button>
      {showModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 ">

            <div className="relative w-auto max-w-3xl">
              {/*content*/}
              <div className="justify-center rounded-sm shadow-lg relative flex flex-col w-full bg-white ">
                {/*header*/}
                <div className="bg-[#0092A0] flex text-center justify-center items-center py-1.5 w-full  rounded-t-sm">
                    <h3 className="text-sm text-white font-semibold text-center">
                    كن وكيلنا
                  </h3>                  
                </div>

                <div className="flex flex-col text-center justify-center items-center w-[16rem] rounded-sm">
                    <div className="py-2 space-y-2 mt-2">
                        <p className="text-[1rem] font-light">البريد الإلكتروني</p>
                        <p className="text-[1rem] font-light">agents@dalelook.com</p>
                    </div>
                    <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-full mt-1 mb-1'></div>
                    </div>
                    <div className="py-2 space-y-2 mt-1.5">
                        <p className="text-[1rem] font-light">الموقع الإلكتروني</p>
                        <p className="text-[1rem] font-light">www.dalelook.com</p>
                    </div>
                    <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-full mt-1 mb-3'></div>
                        </div>
                </div>
                
                {/*footer*/}
                <div className="flex items-center justify-center p-2  rounded-b">
                <button
                    className="bg-[#0092A0] mb-4 text-white font-bold uppercase text-xs px-10 py-1.5 rounded-full"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                     إغلاق
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