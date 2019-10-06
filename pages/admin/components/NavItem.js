import React from 'react'
import Head from 'next/head'
import { Camera, Hash, Box, ChevronDown } from 'react-feather';


class NavItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="text-sm cursor-pointer">
                <div className="flex inline-block items-center text-xs">
                    <div className="pr-2">
                        {this.props.item.icon}
                    </div>
                    <span className="inline-block ">{this.props.item.name}</span>
                </div>
                {this.props.item.items.map((sub, i) => (
                    <li key={i} className="py-2 px-2">
                        <div className="flex inline-block items-center">
                            <div className="pr-2">
                                {sub.icon}
                            </div>
                            <span className="inline-block flex-grow">{sub.name}</span>
                            {sub.items.length ? <ChevronDown className="w-4" /> : ''}
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