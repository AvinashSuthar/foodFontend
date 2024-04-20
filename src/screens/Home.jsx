import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';

function Home() {
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])
  const [search, setSearch] = useState('')
  const hadleInput = (e) => {
    setSearch(e.target.value)
  }
  const loadData = async () => {
    let response = await fetch("https://foodbackend-v7xg.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0] , response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <ExampleCarouselImage text="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Carousel.Caption>
              <div className='container' style={{ zIndex: '10' }}>
                <input className="form-control me-2" onChange={hadleInput} value={search} type="search" placeholder="Search" aria-label="Search" />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container'>
        {
          foodCat.map((data) => {
            return (
              <div >
                <div className='fs-3 m-3' key={data._id}>
                  {data.CategoryName}
                </div>
                <hr />
                <div className=' d-flex flex-wrap'>
                  {
                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) && item.name.toLowerCase().includes(search.toLowerCase()))
                      .map(fiterItems => {
                        return (
                          <div key={fiterItems._id} className='m-3'>
                            <Card foodItem={fiterItems} priceOptions={fiterItems.options[0]}  />
                          </div>
                        )
                      })
                  }
                </div>
              </div>
            )
          })
        }


      </div>
    </>
  )
}

export default Home