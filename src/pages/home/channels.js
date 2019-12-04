import React from 'react'
import mock from './../mock.json'
import { Facebook } from 'react-feather'
import { Twitter } from 'react-feather'
import { Instagram } from 'react-feather'
import { Youtube } from 'react-feather'
import AppService from './../../services/app.service'

class Channels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            basics: []
        }
    }

    componentDidMount() {
        AppService.get('channels')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
        AppService.get('basics')
            .then(response => {
                this.setState({
                    basics: response
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <section className="bg-dark-trans text-center py-12 text-black relative z-30">
                <h1 className="flex items-center justify-center font-prim">
                    <span className="text-lg px-4">SHAWARMER</span>
                    <span className="text-3xl border-black border-l-2 px-4"> CHANNELS </span>
                </h1>
                <div className="mt-12">
                    <p className="mt-4 text-gray-500 font-light text-sm">You can also find us on social media platforms</p>
                </div>
                <div className="mt-4">
                    {
                        this.state.basics.map((item, i) => {
                            return <div key={i} className="flex justify-center">
                                <a href={item.twitter} target="_blank" className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Twitter size="18" />
                                </a>
                                <a href={item.facebook} target="_blank" className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Facebook size="18" />
                                </a>
                                <a href={item.instagram} target="_blank" className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Instagram size="18" />
                                </a>
                                <a href={item.youtube} target="_blank" className="text-gray-400 rounded-full h-10 w-10 flex items-center justify-center bg-gray-700 text-white mx-1">
                                    <Youtube size="18" />
                                </a>
                            </div>
                        })
                    }
                </div>
                <div className="flex flex-wrap md:w-1/2 p-4 md:p-0 m-auto mt-10">{
                    this.state.categories.map((item, i) =>
                        <a href={item.link} target="_blank" className="w-1/2 md:w-1/3 p-2" key={i}>
                            <img src={item.image} alt="dummy" className="w-full h-full fit-cover rounded-lg" />
                        </a>
                    )
                }
                </div>

                {/* <div>
                    {this.state.products.map((item, i) => {
                        return <div key={i}>{item.name} </div>
                    })}
                </div> */}
            </section>

        )
    }

}

export default Channels

