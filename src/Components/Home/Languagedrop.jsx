import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import dropdown from "../pictures/dropdown.svg"
import {RiArrowDownSLine} from 'react-icons/ri'

import se from "../pictures/se.png"
import uk from "../pictures/uk.png"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Languagedrop() {
    return (
        <Menu as="div" className="relative  text-left ">
            <div className="arabic ">
                <Menu.Button className="text-[#0092A0] inline-flex justify-center 
                px-2 mr-20
                text-sm font-medium text-[#0092A0]shadow-sm">
                    <RiArrowDownSLine size={15} className='text-[#737373] font-bold mt-[] cursor-pointer'/>
                    {/* <span className="text-[#0092A0] text-sm ">العربية</span> */}
                    <img className='w-[1rem] ' src={se} alt="se" />
                    

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
                <Menu.Items className="absolute right-16 w-[5.5rem] mt-2 origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none arabic">
                    <div className="arabic text-right ">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-[#0092A0]"
                                            : "text-black",
                                        "flex  py-2 text-sm pr-2"
                                    )}
                                >
                                    English 
                                    <img className='w-[1.3rem] mr-[0.5rem]' src={uk} alt="se" />

                                 </a>
                            )}
                        </Menu.Item>
                        
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
                                        }