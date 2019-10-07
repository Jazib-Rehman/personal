import React from 'react'
import Head from 'next/head'
import { Camera, Hash, Box, ChevronDown } from 'react-feather';


class NavItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="text-sm cursor-pointer text-white"  >
                <div className="flex inline-block items-center text-xs  p-2 trans-1">
                    <div className="pr-2 pl-4">
                        {this.props.item.data.icon}
                    </div>
                    <span className="inline-block ">{this.props.item.data.name}</span>
                </div>
                {this.props.item.data.items.map((sub, i) => (
                    <li key={i} className="py-2">
                        <div className="flex inline-block items-center p-1 trans-1" onClick={()=> sub.toggle()}>
                            <div className="pr-2">
                                {sub.data.icon}
                            </div>
                            <span className="inline-block flex-grow">{sub.data.name}</span>
                            {sub.data.items.length ? <ChevronDown className="w-4  mr-4" /> : ''}
                        </div>
                        <div  className={sub.selected ? 'hidden' : ''} >
                            {sub.data.items.map((sub, j) => (
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