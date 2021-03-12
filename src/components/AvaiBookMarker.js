import React from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'

const AvaiBookMarker = (props) => {
  const icon = L.icon({
    iconUrl: 'marker-avaibook.svg',
    iconSize: props.size,
    iconAnchor: [props.size[0] / 2, props.size[1]],
    popupAnchor: [0, -(props.size[1])]
  })

  return (
    <Marker position={ props.position } icon={icon}>
      {props.children}
    </Marker>
  )
}

export default AvaiBookMarker;
