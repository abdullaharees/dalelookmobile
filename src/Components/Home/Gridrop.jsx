import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import gridm from "../pictures/gridm.svg"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Gridrop({activeItem, setActiveItem}) {

    return (
        <Menu as="div" className="relative inline-block text-left z-20">
            <div className="arabic">
                <Menu.Button className='flex flex-col justify-center items-center'>
                    <img className='w-[1.1rem] py-1' src={gridm} alt="Company Logo" />
                    <p className='text-[white] mt-[0.15rem] text-[0.6rem]'>عرض الإعلانات</p>
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
                                <div>
                                <a
                                    className={classNames(
                                            "bg-[#0092A0] text-white font-semibold block px-4 py-2 text-sm"
                                    )}
                                >
                                     عرض الإعلانات
                                </a>
                                    </div>
                            )}

                        </Menu.Item>
                        <div>

                        <Menu.Item>
                            {({ active }) => (
                            <div onClick={() => setActiveItem('item1')} className="border-b-[1px] border-[#9393935b] py-1">
                                <a
                                    className={`text-sm mr-4 ${active && 'text-black'}`}
                                    >
                                    معرض
                                </a>
                                <input type="radio" id="html" name="fav_language" value="HTML"  className={` mr-[3rem] ${activeItem === 'item1' && 'bg-[#0092A0]'}`}/>
                            </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <div onClick={() => setActiveItem('item2')} className="border-b-[1px] border-[#9393935b] py-1">
                                <a
                                    className={`text-sm mr-4 ${active && 'text-black'}`}
                                    >
                                 جريد

                                </a>
                                <input type="radio" id="html" name="fav_language" value="HTML"  className={` mr-[4rem] ${activeItem === 'item1' && 'bg-[#0092A0]'}`}/>
                            </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <div onClick={() => setActiveItem('item3')} className="border-b-[1px] border-[#9393935b] py-1">
                                <a
                                    className={`text-sm mr-4 ${active && 'text-black'}`}
                                    >
                               قائمة

                                </a>
                                <input type="radio" id="html" name="fav_language" value="HTML"  className={` mr-[3.55rem] ${activeItem === 'item1' && 'bg-[#0092A0]'}`}/>
                            </div>
                            )}
                        </Menu.Item>

                        </div>


                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
                                        }