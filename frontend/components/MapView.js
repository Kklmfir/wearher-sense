import { useEffect, useRef } from 'react';

export default function MapView(){
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      const s = document.createElement('script');
      s.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places`;
      s.async = true;
      s.onload = initMap;
      document.head.appendChild(s);
    } else initMap();
  },[]);

  const initMap = () => {
    const center = { lat: -6.300, lng: 107.084 }; // default Cikarang area
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 12,
      styles: [],
    });
    const trafficLayer = new window.google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }

  return <div ref={mapRef} style={{width:'100%', height:'100%'}} />
}
