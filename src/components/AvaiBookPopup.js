import React from 'react'
import { Popup } from 'react-leaflet'

const CustomPopup = (props) => {
  console.log(props.children)
  return (
    <Popup>
      {props.children}
    </Popup>
  )
}

export default CustomPopup
