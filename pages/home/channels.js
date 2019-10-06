

import React from 'react'
import mock from './../mock.json'

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
                    <span className="text-lg px-4">OUR</span>
                    <span className="text-3xl border-black border-l-2 px-4"> STATIONS </span>
                </h1>
                <div className="flex flex-wrap md:w-1/2 p-4 md:p-0 m-auto mt-4">{
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

