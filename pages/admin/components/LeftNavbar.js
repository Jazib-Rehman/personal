import React from 'react'
import Head from 'next/head'
import NavItem from './NavItem'
import { Box, Home, FileMinus, Phone, Layers } from 'react-feather';


class LeftNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    name: '',
                    items: [
                        {
                            name: 'Dashboard',
                            items: [],
                            icon: <Box className="w-4" />,

                        }
                    ]
                },
                {
                    name: '',
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
            <nav className='bg-white border-r h-full text-gray-900'>
                <div className="text-center p-1">LOGO</div>
                <div className="">
                    {this.state.navs.map((item, i) => <NavItem item={item} key={i} />)}
                </div>
            </nav>
        )
    }

}

export default LeftNavbar