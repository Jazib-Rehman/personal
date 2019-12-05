import AppService from './../../services/app.service'

import React from 'react'
import Category from '../../components/category.js'
import Meal from '../../components/meal'
import scrollToComponent from 'react-scroll-to-component';

// without options

class Foods extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            unsigned: []
        }
    }

    componentDidMount() {
        AppService.get('categories-with-products')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
        AppService.get('unsign-products')
            .then(response => {
                this.setState({ unsigned: response })
            })
            .catch(err => console.error(err));

        scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
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
                            <a class="inline-block btn text-prim mx-1 my-1 w-full sm:w-64 bg-white" onClick={() => scrollToComponent(this.i, { offset: 0, align: 'top', duration: 1500 })} >{menu.name}</a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap  mt-8 w-full  m-auto w-full md:w-2/3 ">
                    {
                        this.state.unsigned.map((item, j) => (
                            <Meal meal={item} key={j} />
                        ))
                    }
                </div>
                {this.state.categories.map((category, i) => (
                    <section className={i} ref={(section) => { i = section; }}>
                        <Category category={category} key={i} />
                    </section>
                ))}
            </section>
        )
    }
}

export default Foods