'use client'

import { memo } from 'react'


import { LoadScript } from '@react-google-maps/api'

const Loading = <div className="loading" />

const onLoad = () => console.log('script loaded')

const onError = (err) => console.log('onError: ', err)

const mapCenter = { lat: 27.672932021393862, lng: 85.31184012689732 }

function GoogleMap() {


  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC4uWOlI8zmNC90h5e4NfxxnwYKqs1X710"
      region='EN'
      version='weekly'
      center={mapCenter}
      onLoad={onLoad}
      onError={onError}
      loadingElement={Loading}
      preventGoogleFontsLoading={false}
    >
      
    </LoadScript>
  )
}

export default memo(GoogleMap)

