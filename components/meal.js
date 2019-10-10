import React from 'react'

class Meal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4  p-2 ">
                <div className="relative cursor-pointer tans-all">
                    <img className="m-auto w-full h-full object-cover rounded-lg" src={this.props.meal.image} alt="Shawarma" />
                    <h2 className="text-dark text-md p-2">{this.props.meal.name}</h2>
                    <div className="flex justify-center pb-4">
                        {
                            this.props.meal.tags.map((tag,i) => (
                                <div key={i} className="inline-block px-2 rounded-full border bg-gray-600  text-white text-xs mr-1">{tag}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}


export default Meal