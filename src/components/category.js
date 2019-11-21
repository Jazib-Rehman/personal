import React from 'react'
import Meal from './meal'

class Category extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="menu mt-12 m-auto">
                <h2 className="font-prim text-prim font-prim relative rounded justify-between title text-3xl">
                    {this.props.category.name}
                </h2>
                <div className="flex flex-wrap  mt-8 w-full  m-auto w-full md:w-2/3 ">
                    {
                        this.props.category.meals.map((meal, j) => (
                            <Meal meal={meal} key={j} />
                        ))
                    }
                </div>
            </section>
        )
    }

}


export default Category