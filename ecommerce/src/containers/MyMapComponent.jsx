import React, { useEffect, useRef } from 'react'

function MyMapComponent({ center, zoom }) {

const ref = useRef();

useEffect(() => {
  new window.google.maps.Map(ref.current, {
    center,
    zoom,
  });
});

  return (
    <div>
      <div ref={ref} id="map" />
    </div>
  );
}

export default MyMapComponent