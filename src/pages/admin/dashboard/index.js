import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import Meal from './../../../components/meal'
import Card from '../../../components/kit/card'
import { Layers, PlusCircle, Eye, RefreshCw, Inbox, FileText, MapPin, Coffee, Info, PlusSquare } from 'react-feather';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {

    static getInitialProps(data) {
        return { list: data.query.list }
    }

    render() {
        return (
            <AdminLayout>
                <div className="flex w-full h-full">
                    <div className="w-64 h-screen fixed">
                        <LeftNavbar />
                    </div>
                    <div className="w-64 h-screen p-32">
                    </div>
                    <div className="w-full">
                        <Header />

                        <div className="pt-24 px-10 pb-10">
                            <div className="bg-white rounded shadow shadow-md py-4 px-8">
                                <div className="text-center py-2 my-2 border-b">
                                    <p className="text-2xl font-semibold text-gray-700">Dashboard</p>
                                </div>
                                <div className="flex flex-wrap pb-2 border-b">
                                    <div className="w-2/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Products</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <Link to="/admin/add-product">
                                                    <div className="hover relative overflow-hidden rounded rounded-lg w-40 h-40 flex mx-1 justify-center items-center">
                                                        <img src="/uploads/siteHeaders/bg.jpg" className="z-10 w-full h-full absolute" />
                                                        <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                        <div className="absolute z-30 flex justify-center items-center">
                                                            <p className="text-lg font-thin px-1 text-white">Add Product</p>
                                                            <PlusCircle className="h-4 text-white" />
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link to="/admin/products">
                                                    <div className="hover relative overflow-hidden rounded rounded-lg w-40 h-40 flex mx-1 justify-center items-center">
                                                        <img src="/uploads/siteHeaders/bg2.jpg" className="z-10 w-full h-full absolute" />
                                                        <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                        <div className="absolute z-30 flex justify-center items-center">
                                                            <p className="text-lg font-thin px-1 text-white">View Product</p>
                                                            <Eye className="h-4 text-white" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Categories</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <Link to="/admin/categories">
                                                    <div className="hover relative overflow-hidden rounded rounded-lg w-40 h-40 flex mx-1 justify-center items-center">
                                                        <img src="/uploads/siteHeaders/bg3.jpg" className="z-10 w-full h-full absolute" />
                                                        <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                        <div className="absolute z-30 flex justify-center items-center">
                                                            <p className="text-lg font-thin px-1 text-white">Add Category</p>
                                                            <PlusCircle className="h-4 text-white" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Basics</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <Link to="/admin/basics">
                                                    <div className="hover relative overflow-hidden rounded rounded-lg w-40 h-40 flex mx-1 justify-center items-center">
                                                        <img src="/uploads/siteHeaders/bg4.jpg" className="z-10 w-full h-full absolute" />
                                                        <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                        <div className="absolute z-30 flex justify-center items-center">
                                                            <p className="text-lg font-thin px-1 text-white">Update Basics</p>
                                                            <RefreshCw className="h-4 text-white" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap pb-2 border-b">
                                    <div className="w-2/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Contacts</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <Link to="/admin/inbox">
                                                    <div className="hover relative overflow-hidden rounded rounded-lg w-40 h-40 flex mx-1 justify-center items-center">
                                                        <img src="/uploads/siteHeaders/bg5.jpg" className="z-10 w-full h-full absolute" />
                                                        <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                        <div className="absolute z-30 flex justify-center items-center">
                                                            <p className="text-lg font-thin px-1 text-white">Inbox</p>
                                                            <Inbox className="h-4 text-white" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b py-2">
                                    <p className="text-2xl font-thin">Pages</p>
                                </div>
                                <div className="py-4 border-b">
                                    <p className="text-md font-normal my-5">Home</p>
                                    <div className="w-full flex flex-wrap justify-center">
                                        <Link to="/admin/banner">
                                            <div className="hover relative overflow-hidden rounded rounded-lg  w-56 h-56 flex mx-1 justify-center items-center">
                                                <img src="/uploads/siteHeaders/banner.jpg" className="z-10 h-full object-cover absolute" />
                                                <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                <div className="absolute z-30 flex justify-center items-center">
                                                    <p className="text-lg font-thin px-1 text-white">Banner</p>
                                                    <Layers className="h-4 text-white" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/admin/channels">
                                            <div className="hover relative overflow-hidden rounded rounded-lg  w-56 h-56 flex mx-1 justify-center items-center">
                                                <img src="/uploads/siteHeaders/channel.png" className="z-10 h-full object-cover absolute" />
                                                <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                <div className="absolute z-30 flex justify-center items-center">
                                                    <p className="text-lg font-thin px-1 text-white">Channel</p>
                                                    <Layers className="h-4 text-white" />
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/admin/locator">
                                            <div className="hover relative overflow-hidden rounded rounded-lg  w-56 h-56 flex mx-1 justify-center items-center">
                                                <img src="/uploads/siteHeaders/locator.png" className="z-10 h-full object-cover absolute" />
                                                <div className="w-full h-full absolute z-20 bg-trans"></div>
                                                <div className="absolute z-30 flex justify-center items-center">
                                                    <p className="text-lg font-thin px-1 text-white">Store Locator</p>
                                                    <MapPin className="h-4 text-white" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Dashboard