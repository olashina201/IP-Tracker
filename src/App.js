import React, { useState } from 'react'
import Header from './components/Header'
import Map from './components/Map'
import Context from './components/context'




function App() {
  const [state, setState] = useState({
    ip: '192.168.255.255',
    lat: 37.38605,
    lng: -122.08385,
    city: 'Magbon',
    region: 'Lagos',
    postalCode: '100001',
    timezone: 'UTC -07:00',
    isp: 'S.O.Q LLC',
  })
    
  return (
    <Context.Provider value={{ state, setState}}>
      <Header />
      <Map />
    </Context.Provider>
  );
}

export default App;
