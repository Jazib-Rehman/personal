import React from 'react'
import Head from 'next/head'
import NavItem from './NavItem'

class LeftNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    name: 'Main',
                    items: [
                        {
                            name: 'Dashboard',
                            items: [],
                        }
                    ]
                },
                {
                    name: 'Web Apps',
                    items: [
                        {
                            name: 'Email',
                            items: [{ name: 'Inbox', items: [] }, { name: 'Read', items: [] }, { name: 'Compose', items: [] }],
                        },
                        {
                            name: 'Chat',
                            items: [],
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <nav className='bg-indigo-900 h-full text-indigo-100'>
                <div className="text-center p-1">LOGO</div>
                <div className="p-2">
                    {this.state.navs.map((item) => <NavItem item={item} />)}
                </div>
            </nav>
        )
    }

}

export default LeftNavbar