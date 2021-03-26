import React, { useState } from 'react'
import { Circle, useMapEvents } from 'react-leaflet'

import AvaiBookMarker from './AvaiBookMarker'

const CompetitorsArea = () => {
  const [position, setPosition] = useState(null);
  const [competitors, setCompetitors] = useState([]);

  const fetchCompetitors = async (position, radius) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_COMPETITORS_URL}?lat=${position.lat}&lng=${position.lng}&radius=${radius}&access_token=${process.env.REACT_APP_COMPETITORS_TOKEN}&currency=native&limit=10`)
      const competitors = await response.json()

      setCompetitors(competitors.properties)
    } catch(err) {
      console.err(err)
    }
  }

  const map = useMapEvents({
    click(e) {
      fetchCompetitors(e.latlng, 2000)
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    }
  })

  return position === null ? null : (
    <>
      <Circle center={position} radius={2000} />
      { competitors.map((competitor) => {
        return (
          <AvaiBookMarker
            position={{ lat: competitor.latitude, lng: competitor.longitude }}
            size={[36, 36]}
            key={competitor.airbnb_property_id}
          />
        )
      })}
    </>
  )
}

export default CompetitorsArea
