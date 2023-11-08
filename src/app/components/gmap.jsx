'use client'

import { useEffect, useRef, memo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const coordinates = {
  lat: 34.50327494610926,
  lng: -84.95104469095914
}

function GMap(height) {
  const googlemap = useRef(null);
  
  useEffect(() => {
    //Figure out hiding before you push it to repo
    const loader = new Loader({
      apiKey: process.env.GMAPS,
      version: "weekly",
    });
    let map;
    let marker; 
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: coordinates,
        zoom: 17,
      });
      marker = new google.maps.Marker({
        map: map,
        position: coordinates
      });
    });
  })

  return(
    <div id="map-container" className="mx-auto border border-4 border-double border-[#206921] rounded shrink-0">
      <div id="map" className="h-[210px] w-[330px] md:w-[480px]" ref={googlemap} />
    </div>
    
  ) 
}

export default memo(GMap);