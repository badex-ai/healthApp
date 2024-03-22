import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Close from '../assets/icons/close';


const MapModal = ({closeModal}) => {
    
    const [map, setMap] = React.useState(null)


      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
      })
    


      const containerStyle = {
        width: '80%',
        height: '70%'
      };
    const center = {
        lat: -3.745,
        lng: -38.523
      };

    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      const mapView = isLoaded ?  <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap> : "loading..."
         
         
         return (
            // <div className='relative'>
                <div className="absolute  border-gray-50 rounded-xl bottom-0 z-2  bg-white h-[70vh] w-[85%] p-2">
                <button className="absolute text-4xl top-6 right-6 w-16 h-16 bg-black rounded-full" onClick={closeModal}><Close/></button>
                <div className='w-40 h-3 bg-black rounded-full mt-[5px] mx-auto '></div>
                <div className='mx-auto '>
                {mapView}
                </div>
                
                </div>
      )
      }
  


export default React.memo(MapModal)