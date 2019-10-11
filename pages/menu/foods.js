
import React from 'react'
import mock from './../mock.json'
import Category from '../../components/category.js';

const categories = mock.meals.map((item) => {
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

        console.log(categories)
        this.state = {
            categories
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
                    {this.state.categories.map((menu, i) => (
                        <div key={i} class="w-full sm:w-64 mx-1 text-lg">
                            <a class="inline-block btn text-prim mx-1 my-1 w-full sm:w-64 bg-white" href={'#' + i} >{menu.name}</a>
                        </div>
                    ))}
                </div>

                {this.state.categories.map((category, i) => (
                    <Category category={category} key={i} />
                ))}
            </section>
        )
    }
}

export default Foods