import React from 'react'
import GoogleMapReact from 'google-map-react'
import "./Map.scss"
import Marker from '../Marker/Marker'

const Map = (props) => {
    const markers = props.locations.map((location) => (        
      <Marker
        key={location.id}
        lat={parseFloat(location.latitude)}
        lng={parseFloat(location.longitude)}
      />
    ));
  
    return (
      <div id="map" className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBF4PTz_KLUAwYvvtElVkCZ5GZkxj-YKPE' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }

  export default Map
