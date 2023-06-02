import React from 'react'
import Menu from './components/Menu'
import Center from './components/Center'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='container mx-auto p-5 bg-white shadow-green-300 flex rounded-xl '>
        <Menu/>
        <Center/>
        <Sidebar/>
      </div>

    </div>
  )
}

export default App