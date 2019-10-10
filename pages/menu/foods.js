
import React from 'react'
import mock from './../mock.json'
import Product from '../../components/product.js';

const meals = mock.meals.map((item) => {
    let meals = item.meals.map((meal) => {
        return {
            ...meal,
            image: `/static/assets/menu/${item.name}/${meal.name}.jpg`,
            isSpicy: meal.tags && meal.tags.toLowerCase().includes('spicy'),
            isNormal: meal.tags && meal.tags.toLowerCase().includes('normal'),
            isHomos: meal.tags && meal.tags.toLowerCase().includes('homos'),
            isTahina: meal.tags && meal.tags.toLowerCase().includes('tahina'),
            tags: meal.tags ? meal.tags.split(',') : []
        }
    });
    return {
        ...item,
        meals,
    }
});

class Foods extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            meals
        }
    }

    render() {
        return (
            <section class="relative text-center py-12 w-lg m-auto z-40">
                <h1 class="flex items-center justify-center font-prim text-dark">
                    <span class="text-lg px-4">OUR</span>
                    <span class="text-3xl border-l-2 border-black px-4"> FOOD </span>
                </h1>
                <p className="mt-4 text-gray-500 font-light text-sm">Here you will find our full menu</p>


                <div className="mt-12 flex flex-wrap w-full font-sec justify-center cursor-pointer">
                    {this.state.meals.map((menu, i) => (
                        <div key={i} class="w-full sm:w-64 mx-1 text-lg">
                            <a class="inline-block btn text-prim mx-1 my-1 w-full sm:w-64 bg-white" href={'#' + i} >{menu.name}</a>
                        </div>
                    ))}
                </div>

                {this.state.meals.map((menu, i) => (
                    <section className="menu mt-12 m-auto" key={i} id={i}>
                        <h2 className="font-prim text-prim font-prim relative rounded justify-between title text-3xl">
                            {menu.name}
                        </h2>
                        <div className="flex flex-wrap  mt-8 w-full  m-auto w-full md:w-2/3 ">
                            {
                                menu.meals.map((item, j) => (
                                    <Product item={item} key={j} />
                                ))
                            }
                        </div>
                    </section>
                ))}
            </section>
        )
    }
}

export default Foods