import React from 'react'
import Head from 'next/head'
import { Camera, Hash, Box, ChevronDown } from 'react-feather';


class NavItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={" cursor-pointer text-white " + this.props.className}   >
                <div className="flex inline-block items-center text-sm px-4 py-2 trans-1 hover:bg-indigo-600">
                    <div className="pr-2">
                        {this.props.item.data.icon}
                    </div>
                    <div className="flex flex-grow items-center justify-between">
                        <span className="inline-block">{this.props.item.data.name}</span>
                        <ChevronDown className={this.props.item.data.items.length ? 'w-4' : 'hidden'}  />
                    </div>
                </div>
                {this.props.item.data.items.map((sub, i) => (
                    <NavItem item={sub} key={i} className="" />
                ))}
            </div>
        )
    }

}

export default NavItem