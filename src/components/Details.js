import React, { useContext } from 'react'
import '../App.css'
import context from './context'

function Details() {
    const { state } = useContext(context)

    return (
        <div className="details">
            <div className="ip"><h5>IP address</h5>
                <p className="ip-show">{ state.ip }</p>
            </div>
            <div className="loc"><h5>Location</h5>
                <p className="loc-show">{ `${state.city}, ${state.region}, ${state.postalCode}` }</p>
            </div>
            <div className="timezone"><h5>Timezone</h5>
                <p className="timezone-show">{ state.timezone }</p>
            </div>
            <div className="isp"><h5>ISP</h5>
                <p className="isp-show">{ state.isp }</p>
            </div>
        </div>
    )
}

export default Details
