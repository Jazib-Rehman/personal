import AppService from './../../services/app.service'

import React from 'react'
import Category from '../../components/category.js'
import Meal from '../../components/meal'

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
    }

    handleScroll(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }


    render() {
        return (
            <section class="relative text-center py-12 w-lg m-auto z-40">
                <h1 class="flex items-center justify-center font-prim text-dark">
                    <span class="text-lg px-4 text-prim">OUR</span>
                    <span class="text-3xl border-l-2 border-orange-400 px-4 text-prim"> FOOD </span>
                </h1>
                <p className="mt-4 text-gray-500 font-light text-sm">Here you will find our full menu</p>


                <div className="flex flex-wrap w-full font-sec justify-center cursor-pointer py-4">
                    {this.state.categories.map((menu, i) => (
                        <div key={i} class="w-full sm:w-64 mx-1 text-lg">
                            <a class="inline-block btn text-prim mx-1 my-1 w-full sm:w-64 bg-white rounded-none" onClick={this.handleScroll.bind(this, menu.id)} >{menu.name}</a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap  mt-8 w-full  m-auto w-full md:w-2/3">
                    {
                        this.state.unsigned.map((item, j) => (
                            <Meal meal={item} key={j} />
                        ))
                    }
                </div>
                {
                    this.state.categories.map((category, i) => {
                        return <div id={category.id} className="mt-5">

                            <Category category={category} key={category.id} />
                        </div>
                    })
                }
            </section>
        )
    }
}

export default Foods