import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import gridem from "../pictures/gridem.svg"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Gridropem() {
    return (
        <Menu as="div" className="relative inline-block text-left z-20">
            <div className="arabic">
                <Menu.Button className='flex flex-col justify-center items-center'>
                    <img className='w-[1.1rem] py-1' src={gridem} alt="Company Logo" />
                    <p className='text-[#333333] mt-[0.15rem] text-[0.6rem]'>عرض الإعلانات</p> 
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
                <Menu.Items className="absolute right-0 w-[9rem] mt-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none arabic">
                    <div className="py-1 arabic text-right">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                            "bg-[#FFCC00] text-[#333333] font-semibold block px-4 py-2 text-sm"
                                    )}
                                >
                                     عرض الإعلانات
                                </a>
                            )}
                        </Menu.Item>
                        
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-[#333333]"
                                            : "text-black",
                                        "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                    )}
                                >
                                     جريد
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[4.4rem]"/>

                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active
                                        ? "bg-gray-100 text-[#333333]"
                                        : "text-black",
                                    "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                )}
                            >
                                       قائمة
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[3.9rem]"/>


                                </a>
                            )}
                        </Menu.Item>
                        
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
                                        }