import React from 'react'

import { MapContainer, TileLayer, FeatureGroup, Circle, Marker } from 'react-leaflet'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import CustomPopup from './CustomPopup.js'


const MapView = () => {
  const randomCoord = [37.276418, -7.001000]
  const avaiIcon = Leaflet.icon({
    iconUrl: 'avaibook-apple.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
  })

  return (
    <MapContainer center={{ lat: '37.276418', lng: '-7.001000' }} zoom={16}>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={['mt0','mt1','mt2','mt3']}
        attribution='<a href="https://www.google.es/maps/preview">Google Maps</a>'
      />
      <FeatureGroup>
        <Circle center={randomCoord} radius={200} />
        <Marker position={randomCoord} icon={avaiIcon}>
          <CustomPopup>
            <p>Hello <strong>Sergio</strong><br></br>Where do you live?</p>
          </CustomPopup>
        </Marker>
      </FeatureGroup>
    </MapContainer>
  )
}

export default MapView
