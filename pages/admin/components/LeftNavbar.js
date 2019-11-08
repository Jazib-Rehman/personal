import React from 'react'
import Head from 'next/head'
import NavItem from './NavItem'
import { Box, Home, FileMinus, Phone, Layers, Menu } from 'react-feather';

class LeftNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    name: 'MAIN',
                    items: [
                        {
                            name: 'Dashboard',
                            items: [],
                            icon: <Box className="w-4" />,

                        }
                    ]
                },
                {
                    name: 'PAGES',
                    items: [
                        {
                            name: 'Home',
                            items: [
                                {
                                    name: 'Banner', items: [], icon: <Layers className="w-4" />
                                },
                                { name: 'Channel', items: [], icon: <Layers className="w-4" /> },
                            ],
                            icon: <Home className="w-4" />
                        },
                        {
                            name: 'Our Foods',
                            items: [],
                            icon: <FileMinus className="w-4" />
                        },
                        {
                            name: 'About Us',
                            items: [],
                            icon: <Phone className="w-4" />
                        }
                    ]
                }
            ],
        }
    }

    render() {
        return (
            <nav className='bg-indigo-700 border-r h-full' >
                <div className="p-4 bg-indigo-800  text-white flex justify-between">
                    <p>Dashboard</p>
                    <Menu onClick={() => { this.setState({ isShow: !this.state.isShow }) }} />
                </div>
                <div >
                    {this.state.navs.map((item, i) => <NavItem item={item} key={i} />)}
                </div>
            </nav>
        )
    }

}

export default LeftNavbar