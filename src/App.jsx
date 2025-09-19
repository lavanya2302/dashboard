import React from 'react'
import Navbar from './Components/Navbar'
import Linechart from './Components/Linechart'
import Columnchart from './Components/Columnchart'
import Piechart from './Components/Piechart'
import Footer from './Components/Footer'
import Areachart from './Components/Areachart'

function App() {
  return (
    <div>
      <Navbar />
      
      <div className="container-fluid mt-4 px-3">
        <div className="row g-4">
          <div className='col-12'>
            <Areachart/>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Linechart />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Columnchart />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Piechart />
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
    
  )
}

export default App
