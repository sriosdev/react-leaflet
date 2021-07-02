import React, { useState } from 'react'

const RadiusSelector = ({changeRadius}) => {
  const [radius, setRadius] = useState(2)

  const handleChange = (e) => {
    setRadius(e.target.value)
    changeRadius(e.target.value * 1000)
  }

  return (
    <>
      <span>Radius: {radius * 1000} km</span>
      <input
        type="range"
        min="1"
        max="5"
        value={radius}
        onChange={handleChange}
      />
    </>
  )
}

export default RadiusSelector
