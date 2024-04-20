import React from 'react'


function Footer() {
  return (
    <>
    <div className='d-flex justify-content-around align-items-center' style={{height: "100px"}}>
      <div>
        All right reserved <span style={{color: "#ff0000"}}>©</span>  Copyright 2024
      </div>
      <div>
        <a className='text-decoration-none' rel="opener" href="https://www.linkedin.com/in/avinash-suthar-970a56230/"> <i class="fa-brands fa-linkedin" style={{color: "#ff0000"}}></i></a>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <a className='text-decoration-none' rel="opener" href="https://github.com/AvinashSuthar">   <i class="fa-brands fa-github" style={{color: "#4c00ff"}}></i></a>
      
      </div>
      <div>
        Developed by  <a className='text-decoration-none' rel="noopener" href="https://avinashsuthar-portfolio.netlify.app/">Avinash Suthar</a> with 
        <i class="fa-solid fa-heart ms-2" style={{color: "#ff0000"}}></i> and  <i class="fa-solid fa-mug-hot" style={{color: "#4c00ff"}} ></i>
      </div>
      </div>
    </>
  )
}

export default Footer