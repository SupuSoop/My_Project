import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    
        
        <div className='hero'>
            <div className="card bg-dark text-brown" border-0>
                <img src="image.jpg" class="card-img" alt="Background" height="500px" width="800px" />
                <div className="card-img-overlay d-flex flex-column ">
                    {/* <h5 className="card-title display-4 mb-0 ">NEW SEASON ARRIVALS</h5> */}
                    <h5 className="card display-5 fw-bolder mb-0 ">STYLE YOUR OWN SELF</h5>
                    <p className="card-text display-7 fw-bolder"> WELCOME TO VMART'S LATEST TRENDS</p>
                </div>
            </div>
            <Products/>
        </div>
    )
}


    
  


export default Home