import React from 'react'
import Navbar from './components/Navbar'
import DemoRoutes from './utils/DemoRoutes'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <DemoRoutes />
    </div>
  )
}

export default App