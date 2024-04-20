import React from 'react'

function ExampleCarouselImage({text}) {
  return (
    <div style={{maxHeight:"350px",  objectFit:'contain'  }} >
      <img src={text} alt="" />
    </div>
  )
}

export default ExampleCarouselImage