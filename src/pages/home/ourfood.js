import AppService from './../../services/app.service'

import React from 'react'
import Meal from '../../components/meal'


class OurFood extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        AppService.get('categories')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="bg-white bg-grid w-full">
                <div className="fixed top-100 left-0 w-screen overflow-hidden z-10 bages">
                    <div className="flex w-full px-24">
                        <div className="r-1">
                            <img src="/static/assets/b10.png" className="w-48 mt-8 inline-block" alt="badge" />
                            <img src="/static/assets/b4.png" className="w-48 mt-8 inline-block" alt="badge" />
                        </div>
                        <div className="flex-grow">.</div>
                        <div className="r-2">
                            <img src="/static/assets/b12.png" className="w-64 mt-8 inline-block" alt="badge" />
                            <img src="/static/assets/b6.png" className="w-48 mt-8 inline-block" alt="badge" />
                        </div>
                    </div>
                </div>
                <section className="relative text-center py-12 z-40">
                    <h1 className="flex items-center justify-center font-prim text-dark">
                        <span className="text-lg px-4">OUR</span>
                        <span className="text-3xl border-l-2 border-black px-4"> FOOD </span>
                    </h1>
                    <p className="mt-4 text-gray-500 font-light text-sm">Here you will find our full menu</p>

                    <div className="mt-4">
                        <a className="btn" href="menu.html">OUR FULL MENU</a>
                        <button className="btn">DOWNLOAD PDF</button>
                    </div>
                    <div className="w-full md:px-24">
                        <div className="slider horizontal mt-4 z-40 m-auto h-64 items-center">
                            {/* {this.props.meals[0].meals.map((meal, i) => (
                                <Meal meal={meal} key={i} />
                            ))} */}
                            {this.state.categories.map((item, i) => {
                                return <Meal meal={item} key={i} />
                                // <div key={i}>{item.name} </div>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default OurFood

