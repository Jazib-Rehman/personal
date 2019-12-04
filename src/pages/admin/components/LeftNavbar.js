import React from 'react'
import NavItem from './NavItem'
import { Home, Phone, Menu, PlusCircle, Eye, ShoppingCart, Grid, Info, Map, MapPin, Codesandbox, Layers, Layout, FileText } from 'react-feather';

class LeftNavbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            navs: [
                {
                    name: 'MAIN',
                    style: 'flex inline-block items-center text-sm font-semibold py-2 trans-1 hover:bg-indigo-600 border-b',
                    items: [
                        {
                            name: 'Dashboard',
                            style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-4',
                            items: [],
                            link: '/admin',
                            icon: <Codesandbox className="w-4" />,

                        }
                    ]
                },
                {
                    name: 'ITEMS',
                    style: 'flex inline-block items-center text-sm font-semibold py-2 trans-1 hover:bg-indigo-600 border-b',
                    items: [
                        {
                            name: 'Products',
                            style: 'flex inline-block items-center text-xs font-bold py-2 trans-1 hover:bg-indigo-600 pl-4',
                            icon: <ShoppingCart className="w-4" />,
                            items: [
                                {
                                    name: 'Add',
                                    items: [],
                                    style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-6',
                                    link: '/admin/add-product',
                                    icon: <PlusCircle className="w-4" />,

                                },
                                {
                                    name: 'View',
                                    items: [],
                                    style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-6',
                                    link: '/admin/products',
                                    icon: <Eye className="w-4" />,

                                },
                            ],

                        },
                        {
                            name: 'Categories',
                            items: [],
                            style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-4',
                            link: '/admin/categories',
                            icon: <Grid className="w-4" />,

                        },
                        {
                            name: 'Basics',
                            items: [],
                            style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-4',
                            link: '/admin/basics',
                            icon: <Layout className="w-4" />,

                        },
                        {
                            name: 'Menu (pdf)',
                            items: [],
                            style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-4',
                            link: '/admin/pdf',
                            icon: <FileText className="w-4" />,

                        },
                        // {
                        //     name: 'Contact',
                        //     items: [],
                        //     style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-4',
                        //     icon: <Phone className="w-4" />,
                        //     link: '/admin/contact',
                        // },
                    ]
                },
                {
                    name: 'PAGES',
                    style: 'flex inline-block items-center text-sm font-semibold py-2 trans-1 hover:bg-indigo-600 border-b',
                    items: [
                        {
                            name: 'Home',
                            style: 'flex inline-block items-center text-xs font-bold py-2 trans-1 hover:bg-indigo-600 pl-4',
                            items: [
                                {
                                    name: 'Banners',
                                    items: [],
                                    style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-6',
                                    icon: <Layers className="w-4" />,
                                    link: '/admin/banner'
                                },
                                {
                                    name: 'Channel',
                                    items: [],
                                    style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-6',
                                    icon: <Map className="w-4" />,
                                    link: '/admin/channels'
                                },
                                {
                                    name: 'Store Locator',
                                    items: [],
                                    style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-6',
                                    icon: <MapPin className="w-4" />,
                                    link: '/admin/locator'
                                },
                            ],
                            icon: <Home className="w-4" />
                        },
                        // {
                        //     name: 'About Us',
                        //     items: [],
                        //     style: 'hover:text-black hover:no-underline flex inline-block items-center text-sm py-2 trans-1 hover:bg-indigo-600 pl-4',
                        //     icon: <Info className="w-4" />,
                        //     link: '/admin/about-us'
                        // }
                    ]
                }
            ],
        }
    }

    render() {
        return (
            <nav className='bg-indigo-700 border-r h-full' >
                <div className="p-4 bg-indigo-800  text-white flex justify-between">
                    <a href="/admin">Dashboard</a>
                    <Menu onClick={() => { this.setState({ isShow: !this.state.isShow }) }} />
                </div>
                <div className="px-1">
                    {this.state.navs.map((item, i) => <NavItem item={item} key={i} />)}
                </div>
            </nav>
        )
    }

}

export default LeftNavbar