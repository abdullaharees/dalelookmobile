import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import sortm from "../pictures/sortm.svg"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Sortem() {
    return (
        <Menu as="div" className="relative inline-block text-left z-20">
            <div className="arabic">
                <Menu.Button className='flex flex-col justify-center items-center'>
                    <img className='w-[1.1rem] py-1' src={sortm} alt="Company Logo" />
                    <p className='text-[white] ml-1 text-[0.6rem]'>فرز</p> 
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
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none arabic">
                    <div className="py-1 arabic text-right">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                            "bg-[#0092A0] text-white font-semibold block px-4 py-2 text-sm"
                                    )}
                                >
                                    فرز حسب
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
                                    "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                )}
                            >

                                    الأحدث
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[7.9rem]"/>

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
                                        "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                    )}
                                >
                                    الإعلانات المميزة
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
                                        ? "bg-gray-100 text-[#0092A0]"
                                        : "text-black",
                                    "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                )}
                            >
                                    السعر من الأرخص للأعلى
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[1.4rem]"/>


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
                                    "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                )}
                            >
                                    السعر من الأعلى للأرخص
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[1.4rem]"/>

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
                                    "block px-4 py-2 text-sm border-b-[1px] border-[#9393935b]"
                                )}
                            >
                                    من الأقدم إلى الأحدث
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[3rem]"/>

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
                                    "block px-4 py-2 text-sm "
                                )}
                            >
                                    من الأحدث إلى الأقدم    
                            <input type="radio" id="html" name="fav_language" value="HTML" className="mr-[3rem]"/>

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