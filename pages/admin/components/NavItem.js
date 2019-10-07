import React from 'react'
import Head from 'next/head'
import { Camera, Hash, Box, ChevronDown } from 'react-feather';


class NavItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="text-sm cursor-pointer"  >
                <div className="flex inline-block items-center text-xs  p-2 hover:text-blue-600 hover:pl-3 trans-1 border-l-4 border-white hover:border-indigo-600">
                    <div className="pr-2">
                        {this.props.item.icon}
                    </div>
                    <span className="inline-block ">{this.props.item.name}</span>
                </div>
                {this.props.item.items.map((sub, i) => (
                    <li key={i} className="py-2">
                        <div className="flex inline-block items-center p-1  hover:text-blue-600 hover:pl-2 border-l-4 border-white hover:border-indigo-600 trans-1">
                            <div className="pr-2">
                                {sub.icon}
                            </div>
                            <span className="inline-block flex-grow">{sub.name}</span>
                            {sub.items.length ? <ChevronDown className="w-4  mr-4" /> : ''}
                        </div>
                        <div >
                            {sub.items.map((sub, j) => (
                                <NavItem item={sub} key={j} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

}

export default NavItem