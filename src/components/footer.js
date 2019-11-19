import React from 'react'
import mock from './../pages/mock.json'

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contact: mock.contactUs
        }
    }

    render() {
        return (
            <footer className="flex flex-wrap p-12 border text-gray-700  relative z-30">
                <div className="loc w-full text-center sm:text-left md:w-2/6 font-hairline text-sm p-4">
                    <img src="static/assets/logo-2.png" alt="logo" className="w-64 mb-4" />
                    <p>
                        <i className="fas fa-phone"></i> {this.state.contact.phone}
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> {this.state.contact.email}
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> {this.state.contact.address}
                    </p>
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 md links text-sm p-4">
                    <h1 className="font-hairline text-gray-900 text-lg mb-2">Quick Links</h1>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Contact</p>
                    <p>Carear</p>
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 links text-sm p-4">
                    <h1 className="font-hairline text-gray-900 text-lg mb-2">Follow Us</h1>
                    <p> <i className="fab fa-twitter"></i> Twitter</p>
                    <p> <i className="fab fa-instagram"></i> Instagram</p>
                    <p><i className="fab fa-facebook"></i> Facebook</p>
                    <p> <i className="fab fa-youtube"></i>Youtube</p>
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 links text-sm p-4">
                    <h1 className="font-hairline text-gray-900 text-lg mb-2">Download Our App</h1>
                    <p>ANDROIND</p>
                    <p>IPHONE</p>
                </div>
            </footer>
        )
    }

}

export default Footer