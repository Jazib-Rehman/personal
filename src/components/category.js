
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
                <div className="flex flex-wrap justify-center mt-8 m-auto md:w-2/3">
                    {
                        this.props.category.products.map((item, j) => (
                            <Meal meal={item} key={j} />
                        ))
                    }
                </div>
            </section>
        )
    }

}


export default Category