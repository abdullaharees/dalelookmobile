import React from 'react'

const Divcheckboxem = () => {
  return (
    <div className='bg-[#0092a017] h-[13rem] md:h-[18rem] xl:h-[18rem] mt-1'>

        <div className='flex flex-col justify-center'>

        <div className='flex items-center justify-center px-2 w-full text-2xl mt-2 arabic text-[#0092A0] mb-5'>
        اسم الصفحة <span className='font-bold mr-2'>( العقارات )</span>        </div>

        <div className='flex flex-col justify-center space-x-2'>

            <div className='flex space-x-5 justify-center'>
                <select className='w-[10rem] text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-md py-2 arabic'>
                    <option className='arabic self-start pr-1'>اختر التصنيف</option>
                    <option className='arabic text-right pr-1'>1</option>
                    <option className='arabic text-right pr-1'>1</option>
                </select>

                <select className='w-[10rem] text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-md py-2 arabic'>
                    <option className='arabic self-start pr-1'>اختر التصنيف</option>
                    <option className='arabic pr-1'>1</option>
                    <option className='arabic pr-1'>1</option>
                </select>
            </div>

            <div className='flex space-x-2 justify-center mt-3'>
                <select className='w-[7rem] text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-md py-2 arabic'>
                    <option className='arabic self-start pr-1'>المدينة</option>
                    <option className='arabic text-right pr-1'>1</option>
                    <option className='arabic text-right pr-1'>1</option>
                </select>

                <select className='w-[7rem] text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-md py-2 arabic'>
                    <option className='arabic self-start pr-1'>الحي</option>
                    <option className='arabic pr-1'>1</option>
                    <option className='arabic pr-1'>1</option>
                </select>

                <select className='w-[7rem] text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-md py-2 arabic'>
                    <option className='arabic self-start pr-1'>الشارع</option>
                    <option className='arabic pr-1'>1</option>
                    <option className='arabic pr-1'>1</option>
                </select>
            </div>

        {/* <div className='flex flex-col arabic space-y-2 mt-3 sm:mt-0'>
          <select className='text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-sm  py-2 arabic'>
            <option className='arabic pl-2'> اختر الفئة</option>
            <option className='arabic pl-2'>1</option>
            <option className='arabic pl-2'>1</option>
          </select>

          <select className='text-xs font-semibold bg-white text-[#868686] shadow-lg rounded-sm  py-2 arabic'>
            <option className='arabic pl-2'>اختر المدينة</option> 
            <option className='arabic pl-2'>1</option>
            <option className='arabic pl-2'>1</option>
          </select>

        </div> */}

        </div>

      </div>
          <div className='flex justify-center'>
              <text className='py-1 px-16 mt-5 text-sm font-bold shadow-lg bg-[#0092A0] rounded-md text-white text-center cursor-pointer'>ابحث</text>
          </div>
    </div>
  )
}

export default Divcheckboxem
