
import React from 'react'
import mock from './../mock.json'
import GoogleMap from './../../components/google-map'

class Findus extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="relative text-center py-24 z-40">
                <div className="flex h-80 bg-grid">
                    <div className="w-5/12">
                        <img src="https://shawarmer.com/assets/common/1720x901.jpg" className="w-full h-full object-cover" alt="badge" />
                    </div>
                    <div className="w-7/12">
                        <div className="w-full h-full flex justify-center items-center">
                            <div>
                                <p className="text-2xl ">Our branches in the kingdom</p>
                                <p className="text-sm text-gray-500 mt-6">Our branches in the kingdom</p>
                                <div className="flex mt-6">
                                    <a class="inline-block btn text-prim bg-white" href="#">Estern Province</a>
                                    <a class="inline-block btn text-prim bg-white" href="#">Soutern Area</a>
                                    <a class="inline-block btn text-prim bg-white" href="#">Western Region</a>
                                    <a class="inline-block btn text-prim bg-white" href="#">Central Region</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash">
                    <GoogleMap />
                </div>
            </section>

        )
    }
}

export default Findus