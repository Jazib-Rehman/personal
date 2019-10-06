import React from 'react'
import Head from 'next/head'
import NavItem from './NavItem'
import { Camera, Hash, Box, ChevronDown, Mail, MessageCircle, Home, FileMinus, Phone, Minus, Layers } from 'react-feather';


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
                            icon: <Box className="w-4" />,

                        }
                    ]
                },
                {
                    name: 'Pages',
                    items: [
                        {
                            name: 'Home',
                            items: [
                                { name: 'Banner', items: [], icon: <Layers className="w-4" />},
                                { name: 'Channel', items: [], icon: <Layers className="w-4" />},
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
            ]
        }
    }

    render() {
        return (
            <nav className='bg-indigo-900 h-full text-indigo-100'>
                <div className="text-center p-1">LOGO</div>
                <div className="p-2">
                    {this.state.navs.map((item, i) => <NavItem item={item} key={i} />)}
                </div>
            </nav>
        )
    }

}

export default LeftNavbar