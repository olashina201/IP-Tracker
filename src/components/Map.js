import React, { useContext } from 'react'
import '../App.css'
import Marker from '../images/icon-location.svg'
import GoogleMapReact from 'google-map-react'
import context from './context'

function Map() {
  const { state } = useContext(context)

    return (
        <main className="main">
            <div id="mapid">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyBn_3ejZnHXRfR6XRgnmIDjGW5nv3lOvr0' }}
                  defaultCenter={[state.lat, state.lng]}
                  defaultZoom={15}
                  center={[state.lat, state.lng]}
                >
                  <img src={Marker} lat={state.lat} lng={state.lng} alt="loc"  />
                </GoogleMapReact>
            </div>
        </main>
    )
}

export default Map
