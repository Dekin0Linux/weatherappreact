import React from 'react'
import Menu from './components/Menu'
import Center from './components/Center'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='md:flex flex-wrap justify-center items-center h-screen p-5 bg-image'>
      <div className='container md:w-[50%] md:mx-auto p-2  shadow-blue-300 flex flex-wrap rounded-xl h-full border-[3px] border-white shadow-lg overflow-auto bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50'>
        <Center/>
      </div>

    </div>
  )
}

export default App