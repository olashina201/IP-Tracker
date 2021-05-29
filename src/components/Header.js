import React, { useContext } from 'react'
import Details from './Details'
import '../App.css'
import icon from '../images/icon-arrow.svg'
import Context from './context'
import axios from 'axios'

const Header = () => {
    const { state, setState } = useContext(Context)

    const getData = async (ipAddress) => {
         const apiUrl = `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_WZoTV7gu5Z0LaEEjGpFyMIkCtP6SH&ipAddress=${ipAddress}`
         const response = await axios.get(apiUrl)
         
         const {ip,  isp, location } = await response.data
         setState({
             ip: ip,
             city: location.city,
             region: location.region,
             postalCode: location.postalCode,
             lat: location.lat,
             lng: location.lng,
             timezone: `UTC ${location.timezone}`,
             isp: isp
         })
     }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        getData(state.ip)
        console.log(e.target.value)

    }
    
    
    
    return (
        <header className="header">
            <h1>IP Address Tracker</h1>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <input
                            type="text"
                            placeholder="Search for any IP address or domain"
                            className="ip-input"
                            value = {state.ip}
                            onChange= {e => setState({ip: e.target.value})}
                        />
                        <button type="submit" className="sub-icon" onClick={handleSubmit} >
                            <img src={icon} alt="Arrow icon" />
                        </button>
                    </div>
                </form>
            <Details />
        </header>
    )
}

export default Header
