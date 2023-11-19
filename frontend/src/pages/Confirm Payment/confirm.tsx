import React from 'react'

const Confirm = () => {
  return (
    <div className='flex flex-col w-full bg-[#FBD8AA] text-black min-h-screen px-16 py-8 space-y-8'>
        <p className ='text-lg'>Welcome to <span className='font-bold'>Table 1</span></p>
        <div className='bg-white py-8 px-16 space-y-8 rounded-xl'>
            <p className='text-2xl font-bold text-[#E44937]'> Payment Confirmed </p>
            <p className ='text-md font-thin'> Your payment has been confirmed. </p>
            <p className ='text-md font-thin'> Please wait for tenant to finish preparing your order.</p>
        </div>
    </div>
  )
}

export default Confirm