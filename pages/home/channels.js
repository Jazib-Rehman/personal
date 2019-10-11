

import React from 'react'
import mock from './../mock.json'
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Instagram } from 'react-feather';
import { Youtube } from 'react-feather';

const meals = mock.meals.map((item) => {
    let meals = item.meals.map((meal) => {
        return {
            ...meal,
            image: `/static/assets/menu/${item.name}/${meal.name}.jpg`,
            isSpicy: meal.tags && meal.tags.toLowerCase().includes('spicy'),
            isNormal: meal.tags && meal.tags.toLowerCase().includes('normal'),
            isHomos: meal.tags && meal.tags.toLowerCase().includes('homos'),
            isTahina: meal.tags && meal.tags.toLowerCase().includes('tahina')
        }
    });
    return {
        ...item,
        meals,
    }
});

class Channels extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            meals: meals[5].meals.slice(0, 6)
        }
    }

    render() {
        return (
            <section className="bg-dark-trans text-center py-12 text-black relative z-30">
                <h1 className="flex items-center justify-center font-prim">
                    <span className="text-lg px-4">SHAWARMER</span>
                    <span className="text-3xl border-black border-l-2 px-4"> CHANNELS </span>
                </h1>
                <div className="text-gray-600 mt-12">
                    <p>You can also find us on social media platforms</p>
                </div>
                <div className="mt-4 flex justify-center">
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400 text-white mx-1">
                        <Twitter color='#ffffff' size="24" />
                    </div>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400 text-white mx-1">
                        <Facebook color='#ffffff' size="24" />
                    </div>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400 text-white mx-1">
                        <Instagram color='#ffffff' size="24" />
                    </div>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-400 text-white mx-1">
                        <Youtube color='#ffffff' size="24" />
                    </div>
                </div>
                <div className="flex flex-wrap md:w-1/2 p-4 md:p-0 m-auto mt-10">{
                    this.state.meals.map((item, i) =>
                        <div className="w-1/2 md:w-1/3 p-2" key={i}>
                            <img src={item.image} alt="dummy" className="w-full h-full fit-cover rounded-lg" />
                        </div>
                    )
                }
                </div>
            </section>

        )
    }

}

export default Channels

