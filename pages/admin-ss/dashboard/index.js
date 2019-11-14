import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavBar'
import Header from './../components/Header'
import Meal from './../../../components/meal'
import Card from '../../../components/kit/card'
import { Layers, PlusCircle, Eye, RefreshCw, Inbox, FileText, MapPin, Coffee, Info } from 'react-feather';

class Home extends React.Component {

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
                                    <p className="text-2xl font-semibold text-gray-600">Dashboard</p>
                                </div>
                                <div className="flex flex-wrap pb-2 border-b">
                                    <div className="w-2/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Products</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <div className="border rounded w-40 h-40 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                                    <p className="text-lg font-thin px-1">Add Product</p>
                                                    <PlusCircle className="h-4" />
                                                </div>
                                                <div className="border rounded w-40 h-40 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                                    <p className="text-lg font-thin px-1">View Products</p>
                                                    <Eye className="h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="w-1/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Categories</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <div className="border rounded w-40 h-40 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                                    <p className="text-lg font-thin px-1">Add Category</p>
                                                    <PlusCircle className="h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div className="w-1/4">
                                        <div className="py-2 text-center">
                                            <p className="text-2xl font-thin">Basics</p>
                                        </div>
                                        <div className="p-2">
                                            <div className="flex flex-wrap justify-center items-center">
                                                <div className="border rounded w-40 h-40 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                                    <p className="text-lg font-thin px-1">Update Basics</p>
                                                    <RefreshCw className="h-4" />
                                                </div>
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
                                                <div className="border rounded w-40 h-40 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                                    <p className="text-lg font-thin px-1">Inbox</p>
                                                    <Inbox className="h-4" />
                                                </div>
                                                <div className="border rounded w-40 h-40 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                                    <p className="text-lg font-thin px-1">Feedbacks</p>
                                                    <FileText className="h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b py-2">
                                    <p className="text-2xl font-thin">Pages</p>
                                </div>
                                <div className="py-4 border-b">
                                    <p className="text-md font-normal my-5">Home</p>
                                    <div className="flex flex-wrap">
                                        <div className="border rounded w-64 h-64 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                            <p className="text-lg font-thin px-1">Banner</p>
                                            <Layers className="w-4" />
                                        </div>
                                        <div className="border rounded w-64 h-64 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                            <p className="text-lg font-thin px-1">Channel</p>
                                            <Layers className="w-4" />
                                        </div>
                                        <div className="border rounded w-64 h-64 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                            <p className="text-lg font-thin px-1">Store Locator</p>
                                            <MapPin className="w-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 flex flex-wrap">
                                    <div className="flex flex-wrap">
                                        <div className="border rounded w-64 h-64 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                            <p className="text-lg font-thin px-1">Our Food</p>
                                            <Coffee className="w-4" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <div className="border rounded w-64 h-64 flex mx-1 hover:bg-gray-100 justify-center items-center">
                                            <p className="text-lg font-thin px-1">About Us</p>
                                            <Info className="w-4" />
                                        </div>
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

export default Home