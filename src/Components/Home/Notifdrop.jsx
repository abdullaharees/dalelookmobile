import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import notificationbl from "../pictures/notificationbl.svg"
import notificationw from "../pictures/notificationw.svg"
import { RxCross2 } from 'react-icons/rx'
import { AiFillExclamationCircle } from 'react-icons/ai'



function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Notifdrop() {
    return (
        <Menu as="div" className="relative inline-block text-left pt-1 mb-0.5 ">
            <div className="arabic">
                <Menu.Button className=" mt-[0.2rem] inline-flex justify-center w-full md:px-1 md:py-1 text-sm font-medium text-[#0092A0] rounded-md">
                    <img className='relative w-[1.2rem] mr-2 hover:shadow-xl ease-linear transition-all duration-150 ' src={notificationbl} alt="notification " />
                    <div className="absolute bg-red-600 rounded-full p-[0.45rem] ml-[0.2rem] -top-[0.1rem] text-white text-[0.45rem]"></div>
                    <p className="absolute rounded-full p-[0.4rem] ml-[0.2rem] -top-[0.6rem] text-white text-[0.45rem]">22</p>      


                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-[20rem] mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none arabic">
                    <div className="arabic text-center rounded-sm">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                            "bg-[#0092A0] text-white font-semibold  px-4 py-2 text-sm flex justify-center rouned-t-sm"
                                    )}
                                >

                                    <div>
                                     <img className='relative w-[1.2rem] ml-3' src={notificationw} alt="notification" />
                                    </div>
                                    <div className="absolute bg-red-600 rounded-full p-[0.4rem] ml-[5.2rem] top-2"></div>      
                                    <div className="absolute rounded-full p-[0.4rem] ml-[5.2rem] -top-[0.1rem] text-white text-[0.45rem]">22</div>      
                                    

                                     إشعاراتي
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active
                                        ? "bg-gray-100 text-[#0092A0]"
                                        : "text-black",
                                    "flex px-3 py-1 text-sm font-light border-b-2"
                                )}
                            >       
                                    <AiFillExclamationCircle size={45} className="text-red-600 ml-5"/>
                                    نص الإشعار نص الإشعار نص الإشعار
                                    نص الإشعار نص الإشعار نص الإشعار 
                                    <RxCross2 size={30} className="mt-2 mr-5"/>
                                    
                                </a>
                                
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active
                                        ? "bg-gray-100 text-[#0092A0]"
                                        : "text-black",
                                    "flex px-3 py-1 text-sm font-light border-b-2"
                                )}
                            >       
                                    <AiFillExclamationCircle size={45} className="text-red-600 ml-5"/>
                                    نص الإشعار نص الإشعار نص الإشعار
                                    نص الإشعار نص الإشعار نص الإشعار 
                                    <RxCross2 size={30} className="mt-2 mr-5"/>
                                    
                                </a>
                                
                            )}
                        </Menu.Item>
                        
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active
                                        ? "bg-gray-100 text-[#0092A0]"
                                        : "text-black",
                                    "flex px-3 py-1 text-sm font-light border-b-2"
                                )}
                            >       
                                    <AiFillExclamationCircle size={45} className="text-red-600 ml-5"/>
                                    نص الإشعار نص الإشعار نص الإشعار
                                    نص الإشعار نص الإشعار نص الإشعار 
                                    <RxCross2 size={30} className="mt-2 mr-5"/>
                                    
                                </a>
                                
                            )}
                        </Menu.Item>
                        {/* <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                    </button>
                                )}
                            </Menu.Item>
                        </form> */}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
                                        }