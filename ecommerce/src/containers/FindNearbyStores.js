import React from "react"
import {Map, GoogleApiWrapper} from "google-maps-react"

const FindNearbyStores = () => {
    return (
        <>
           <Map 
                google = {this.props.google}
                style = {{width: "100%", height: "100%"}}
                zoom = {10}
                initialCenter = {
                    {
                        lat: 6.5243793,
                        lng: 3.379205700000057
                    }
                }
            />
        </>
    )
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyBZWjU2-NDtel_Y71lVnTUnPvSE0wB8hZQ"
})(FindNearbyStores)











