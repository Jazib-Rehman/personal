import React from 'react'
import Head from 'next/head'

class NavItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="pl-2">
                {this.props.item.name}
                {this.props.item.items.map((sub, i) => (
                    <li key={i} >
                        {sub.name}
                        {sub.items.map((sub, j) => (
                            <NavItem item={sub} />
                        ))}
                    </li>
                ))}
            </ul>
        )
    }

}

export default NavItem