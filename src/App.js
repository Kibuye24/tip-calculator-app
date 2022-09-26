import React from 'react';
import { Bill, TotalCount, Header } from './components/components';

const App = () => {
  return (
    <div className='bg h-screen'>
      <Header />
      <div className='grid grid-cols-2 border-2 border-transparent rounded-lg w-[900px] ml-[200px] bg-white'>
        <Bill />
        <TotalCount />
      </div>
    </div>
  )
}

export default App;
