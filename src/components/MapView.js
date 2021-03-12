import React from 'react'
import { MapContainer, TileLayer, FeatureGroup, Circle, Marker } from 'react-leaflet'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import AvaiBookPopup from './AvaiBookPopup.js'
import AvaiBookMarker from './AvaiBookMarker.js'


const MapView = () => {
  const randomCoord = [37.276418, -7.001000]

  return (
    <MapContainer center={{ lat: '37.276418', lng: '-7.001000' }} zoom={16}>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={['mt0','mt1','mt2','mt3']}
        attribution='<a href="https://www.google.es/maps/preview">Google Maps</a>'
      />
      <FeatureGroup>
        <Circle center={randomCoord} radius={200} />
        <AvaiBookMarker position={randomCoord} size={[50, 50]}>
          <AvaiBookPopup>
            <p>Hello <strong>Sergio</strong><br></br>Where do you live?</p>
          </AvaiBookPopup>
        </AvaiBookMarker>
      </FeatureGroup>
    </MapContainer>
  )
}

export default MapView
