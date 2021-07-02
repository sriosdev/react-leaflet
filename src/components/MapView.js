import React from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CompetitorsArea from './CompetitorsArea'

const MapView = ({comptitorsAreaSize}) => {
  return (
    <MapContainer center={{ lat: '37.276418', lng: '-7.001000' }} zoom={13}>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={['mt0','mt1','mt2','mt3']}
        attribution='<a href="https://www.google.es/maps/preview">Google Maps</a>'
      />
      <FeatureGroup>
        <CompetitorsArea area={comptitorsAreaSize} />
      </FeatureGroup>
    </MapContainer>
  )
}

export default MapView
