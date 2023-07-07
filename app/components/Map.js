'use client'
// import { useEffect, useRef, useMemo } from "react";
import React from 'react';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const apiKey='AIzaSyBk9e7nS6szcr93NKNDmbkx4iStChDMAtI'

function Map() {
    const [autocomplete, setAutocomplete] = React.useState(null);
    const [selectedPlace, setSelectedPlace] = React.useState(null);
  
    const onLoad = (autocomplete) => {
      setAutocomplete(autocomplete);
    };
  
    const onPlaceChanged = () => {
      if (autocomplete !== null) {
        const place = autocomplete.getPlace();
        setSelectedPlace(place);
      }
    };
  
    return (
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          center={{ lat: 0, lng: 0 }}
          zoom={8}
          mapContainerStyle={{ width: "100%", height: "400px" }}
        >
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input type="text" placeholder="Enter a location" />
          </Autocomplete> */}
        </GoogleMap>
      </LoadScript>
    );
  }
  

export default Map;
