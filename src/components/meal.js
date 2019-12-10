import React from 'react'

class Meal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // tags: this.props.meal.tags ? this.props.meal.tags.split(',') : []
        }
    }

    render() {
        return (
            <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 mt-4">
                <div className="cursor-pointer">
                    <img className="m-auto w-40 h-40 object-cover rounded-lg zoom-in" src={this.props.meal.image} alt="Shawarma" />
                    <h2 className="text-dark text-md p-2">{this.props.meal.name}</h2>
                    <div className="flex justify-center pb-4">
                        {/* {
                            this.state.tags.map((tag, i) => ( */}
                        <div className="inline-block px-2 rounded-full border bg-orange-400 text-white text-xs mr-1">Spicy</div>
                        <div className="inline-block px-2 rounded-full border bg-orange-400 text-white text-xs mr-1">Sour</div>
                        {/* ))
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Meal