import React from 'react'

const Payment = () => {
  return (
    <div className='flex flex-col w-full bg-[#FBD8AA] text-black min-h-screen px-16 py-8 space-y-8'>
        <p className ='text-lg'>Welcome to <span className='font-bold'>Table 1</span></p>
        <div className='bg-white py-8 px-16 space-y-8 rounded-xl'>
            <p className='text-2xl font-bold text-[#E44937]'> Unique Code </p>
            <p className ='text-1xl'> You have checked out your order. </p>
            <p className ='text-1xl'>Here is your unique code.</p>
            <p className ='text-4xl font-bold text-[#0B828F]'> A123 </p>
            <p className ='text-1xl'>Don’t forget to show it to the central cashier to pay your order before timer runs out.</p>
            <p className ='text-4xl font-bold text-[#F5A306]'>29:59</p>
        </div>
    </div>
  )
}

export default Payment