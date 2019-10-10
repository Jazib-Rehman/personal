import React from 'react'
import Card from './kit/card'


class Product extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Card>
                <div className="item object-contain flex flex-col">
                    <img src={this.props.item.src ? this.props.item.src : 'https://dummyimage.com/100X100/000/fff'} alt="Shawarma" className="h-48 object-cover" />
                    <div className="bg-prim font-prim p-1 text-black"> {this.props.item.name} </div>
                </div>
            </Card>
        )
    }

}


export default Product