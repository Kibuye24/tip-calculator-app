import React from 'react'

const TotalCount = () => {

  // const [amount, setamount] = useState(0.00);

  return (
    <div className='bg-teal-900 rounded-lg m-10' >
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='text-white pl-5 pt-10'>Tip Amount <p className='text-xs text-teal-600'>/ person</p></h1>
          <h1 className='text-white pl-5 pt-5'>Total <p className='text-xs text-teal-600'>/ person</p></h1>
        </div>
        <div>
          <h1 className='text-teal-200 pl-5 pt-10 text-4xl'>$0.00</h1>
          <h1 className='text-teal-200 pl-5 pt-10 text-4xl'>$0.00</h1>
        </div>
      </div>
      <div className='text-center'>
          <button className='w-3/4 cursor-pointer rounded bg-teal-200 text-center mt-24 mb-10 text-teal-800 font-semibold pt-2 pb-2'>RESET</button>
      </div>
    </div>
  )
}

export default TotalCount;
