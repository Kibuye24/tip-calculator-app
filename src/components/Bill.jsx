import React from 'react';

const Bill = () => {
  return (
    <div>
      <div className='ml-10 mt-10 mr-10'>
        <p className='text-xs text-gray-600 pb-2 font-semibold'>Bill</p>
        <input id='bill' name='bill' className='cursor-pointer border-2 rounded border-teal-600 w-full bg-gray-200' placeholder='0' type='number' />
      </div>
      <div className='ml-10 mt-10 mr-10'>
        <p className='text-xs text-gray-600 pb-2 font-semibold'>Select Tip %</p>
        <div id='values' className='grid grid-cols-3 gap-2'>
          <div className='rounded bg-teal-900 hover:bg-teal-300 cursor-pointer'><p className='pt-1 pb-1 bill-text hover:text-teal-800 cursor-pointer font-bold'>5%</p></div>
          <div className='rounded bg-teal-900 hover:bg-teal-300 cursor-pointer'><p className='pt-1 pb-1 bill-text hover:text-teal-800 cursor-pointer font-bold'>10%</p></div>
          <div className='rounded bg-teal-900 hover:bg-teal-300 cursor-pointer'><p className='pt-1 pb-1 bill-text hover:text-teal-800 cursor-pointer font-bold'>15%</p></div>
          <div className='rounded bg-teal-900 hover:bg-teal-300 cursor-pointer'><p className='pt-1 pb-1 bill-text hover:text-teal-800 cursor-pointer font-bold'>25%</p></div>
          <div className='rounded bg-teal-900 hover:bg-teal-300 cursor-pointer'><p className='pt-1 pb-1 bill-text hover:text-teal-800 cursor-pointer font-bold'>50%</p></div>
          <div className='rounded bg-gray-300'>
          <input className='rounded bg-gray-300 w-full h-full hover:border-2 border-teal-300' placeholder='Custom' type='number'/>
        </div>
      </div>
      </div>
      <div className='ml-10 mt-10 mb-10 mr-10'>
        <p className='text-xs text-gray-600 pb-2 font-semibold'>Number of People</p>
        <input id='people' name='people' className='cursor-pointer w-full border-2 rounded border-teal-600 bg-gray-200' placeholder='0' type='number' align='right'/>
      </div>

    </div>
  )
}

export default Bill;
