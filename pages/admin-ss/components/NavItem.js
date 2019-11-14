import React from 'react'
import Head from 'next/head'
import { Camera, Hash, Box, ChevronDown,ChevronUp, ChevronRight } from 'react-feather';


class NavItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }

    render() {
        return (
            <div className={"cursor-pointer text-white " + this.props.className}   >
                <div className="flex inline-block items-center text-sm px-4 py-2 trans-1 hover:bg-indigo-600"
                    onClick={() => this.setState({isShow: !this.state.isShow})}
                >
                    <div className="pr-2">
                        {this.props.item.icon}
                    </div>
                    <div className="flex flex-grow items-center justify-between">
                        <span className="inline-block">{this.props.item.name}</span>
                        <div className={this.props.item.items.length ? '' : 'hidden'}>
                            <ChevronDown  className={!this.state.isShow ? 'w-4 trans-1' : 'hidden'} />
                            <ChevronUp  className={this.state.isShow ? 'w-4 trans-1' : 'hidden'} />
                        </div>
                    </div>
                </div>
                {this.props.item.items.map((sub, i) => (
                    this.state.isShow ?  <NavItem item={sub} key={i}  /> : ''
                ))}
            </div>
        )
    }

}

export default NavItem