import React from "react";
import {IoIosCloseCircle} from 'react-icons/io'

export default function Popupnavthreeem() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="cursor-pointer w-full flex justify-start"
        type="button"
        onClick={() => setShowModal(true)}
      >
                <p className="ml-[5rem]">عن منصة دليلك</p>

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
                    عن التطبيق
                  </h3>                  
                </div>

                <div className="flex flex-col text-center justify-center items-center w-[16rem] rounded-sm">
                    <div className="py-4 space-y-2 mt-2">
                        <p className="text-[1rem] font-light">النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص النص النص
                        النص النص النص النص </p>
                    </div>
                    <div className='flex justify-center w-full'>
                            <div className='content-between border-b-[1.75px] w-full mt-1 mb-1'></div>
                    </div>
                </div>
                
                {/*footer*/}
                <div className="flex flex-col  p-2  rounded-b">
                    <div className="flex justify-between mb-5">
                        <p className="text-[0.9rem] mr-1">رقم الإصدار</p>
                        <p className="text-[0.9rem] ml-1">v 3.5.86</p>
                    </div>
                    <div className="flex justify-center items-center self-center">
                    <button
                    className="bg-[#0092A0] mb-2 text-white self-center font-bold uppercase text-xs px-10 py-1.5 rounded-full"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                     إغلاق
                  </button>
                    </div>
                
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