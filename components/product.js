import React from 'react'


class Product extends React.Component {

    constructor(props){
        super(props)
        
    }

    render() {
        return (
            <div>
                <div className="item object-contain flex flex-col">
                    <div className="bg-prim font-prim p-1 text-white"> {this.props.name} </div>
                    <img src={this.props.src} alt="Shawarma" className="h-48 object-cover" />
                </div>
            </div>
        )
    }

}


export default Product