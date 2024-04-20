import React from 'react'
function Card({foodItem ,priceOptions}) {
  let price = Object.keys(priceOptions);


  
  return (
    <div>
      <div className="card rounded bg-dark" style={{ "width": "18rem" }}>
        <img src={foodItem.img} className="card-img-top rounded" style={{height:"250px", objectFit:"fill"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          
          <div className='d-inline me-3'>
            <select name="cars" className='bg-dark  text-white'  style={{ width:"50px" , borderRadius:"5px"}} id="cars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className='d-inline me-3'>
            <select name="cars"   className='bg-dark  text-white' style={{ width:"80px" , borderRadius:"5px"}} id="cars">
              {price.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
          </div>
          <hr />
          
        </div>
        <div className='m-auto mb-4 -mt-4'>
          <button className='btn btn-success  '>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card