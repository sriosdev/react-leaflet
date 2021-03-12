import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = () => {
  return (
    <MapContainer center={{ lat: '37.276418', lng: '-7.001000' }} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default MapView
