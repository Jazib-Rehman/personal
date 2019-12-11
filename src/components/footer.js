import React from 'react'
import AppService from './../services/app.service'

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            basics: [],
            about: []
        }
    }

    componentDidMount() {
        AppService.get('basics')
            .then(response => {
                this.setState({
                    basics: response
                })
            })
            .catch(err => console.error(err));

        AppService.getMethode('about')
            .then(response => {
                if (response.length === 0) {
                    this.setState({ isEmpty: true })
                } else {
                    this.setState({
                        about: response[0]
                    })
                }
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <footer className="flex flex-wrap p-12 text-red-600 bg-black relative z-40">
                <div className="loc w-full text-center sm:text-left md:w-2/6 font-hairline text-sm p-4">
                    <img src="static/assets/logo-2.png" alt="logo" className="w-64 mb-4" />
                    <p>
                        <i className="fas fa-phone"></i> {this.state.about.phone}
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> {this.state.about.email}
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> {this.state.about.address}
                    </p>
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 md links text-sm p-4">
                    <h1 className="font-hairline text-red-700 text-lg mb-2">Quick Links</h1>
                    <p><a href="/" className="hover:text-white hover:no-underline">Home</a></p>
                    <p><a href="/about-us" className="hover:text-white hover:no-underline">About us</a></p>
                    <p><a href="/contact-us" className="hover:text-white hover:no-underline">Contact Us</a></p>
                    {/* <p>Carear</p> */}
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 links text-sm p-4">
                    <h1 className="font-hairline text-red-700 text-lg mb-2">Follow Us</h1>
                    {
                        this.state.basics.map((item, i) => {
                            return <div>
                                <p> <i className="fab fa-twitter"></i> <a href={item.twitter} target="_blank" className="hover:text-white hover:no-underline">Twitter</a></p>
                                <p> <i className="fab fa-instagram"></i> <a href={item.instagram} target="_blank" className="hover:text-white hover:no-underline">Instagram</a></p>
                                <p> <i className="fab fa-facebook"></i> <a href={item.facebook} target="_blank" className="hover:text-white hover:no-underline">Facebook</a></p>
                                <p> <i className="fab fa-youtube"></i> <a href={item.youtube} target="_blank" className="hover:text-white hover:no-underline">Youtube</a></p>
                            </div>
                        })
                    }
                </div>
                <div className="w-full text-center sm:text-left sm:w-1/3 md:w-1/6 links text-sm p-4">
                    {/* <h1 className="font-hairline text-gray-900 text-lg mb-2">Download Our App</h1>
                    <p>ANDROIND</p>
                    <p>IPHONE</p> */}
                </div>
            </footer>
        )
    }

}

export default Footer