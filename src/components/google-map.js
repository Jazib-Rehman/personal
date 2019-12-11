

import React, { Component, createRef } from 'react';

const MY_API_KEY = "AIzaSyAqd6TEcIZREDhEotZO775DOjMKu20Xfb4"

class GoogleMap extends Component {

    componentDidMount() {
        const googleMapScript = document.createElement('script')

        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${MY_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript)

        googleMapScript.addEventListener('load', () => {
            this.googleMap = this.createGoogleMap()
        })
    }

    createMarker = () =>
        new window.google.maps.Marker({
            position: { lat: 43.642567, lng: -79.387054 },
            map: this.googleMap,
        })

    get googleMapDiv() {
        return document.getElementById("google-map")
    }

    googleMapRef = createRef()

    createGoogleMap = () => {
        new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 16,
            center: {
                lat: 43.642567,
                lng: -79.387054,
            },
            disableDefaultUI: true
        })
    }

    render() {
        return (
            <div
                id="google-map"
                ref={this.googleMapRef}
                className="w-full h-64"
            >
            </div>
        );
    }
}

export default GoogleMap;