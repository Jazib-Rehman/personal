

import React from 'react'
import mock from './../mock.json'
import AppService from './../../services/app.service'


class Store extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            locators: []
        }
    }

    componentDidMount() {
        AppService.getMethode('locators')
            .then(response => {
                this.setState({ locators: response })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <section className="text-center py-12 px-16 text-black relative z-30">
                <h1 className="flex items-center justify-center font-prim">
                    <span className="text-lg px-4 text-prim">STORE</span>
                    <span className="text-3xl border-orange-400 text-prim border-l-2 px-4"> LOCATOR </span>
                </h1>
                <div>
                    <p className="mt-4 text-gray-500 font-light text-sm">Find our stores across the kingdom</p>
                </div>
                <div className="flex flex-wrap md:w-11/12 p-4 md:p-0 m-auto">{
                    this.state.locators.map((item, i) =>
                        <div className="w-1/2 md:w-1/4 p-2 mt-6" key={i}>
                            <div>
                                <div className="bg-orange py-1 text-white">
                                    <p className="text-2xl font-light">{item.name}</p>
                                </div>
                                <img src={item.image} alt="dummy" className="m-auto w-full h-56 object-cover" />
                            </div>
                        </div>
                    )
                }
                </div>
            </section>

        )
    }

}

export default Store

