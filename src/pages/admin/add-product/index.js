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
                                    <p className="text-2xl font-semibold text-gray-700">Add Product</p>
                                </div>
                                <div className="flex flex-wrap">    
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Name:</p>
                                        <input type="text" name="name" className="w-full p-2 border bg-white" placeholder="Name!" />
                                    </div>
                                    <div className="w-1/2 p-1">
                                    <p className="text-xs font-semibold">Nutrition Information:</p>
                                        <input type="text" name="nutrition" className="w-full p-2 border bg-white" placeholder="Nutrition information!" />
                                    </div>
                                    <div className="w-1/2 p-1">
                                    <p className="text-xs font-semibold">Description:</p>
                                        <textarea name="description" className="w-full p-2 border bg-white rounded rounded-sm" placeholder="Description!"></textarea>
                                    </div>
                                    <div className="w-1/2 p-1">
                                    <p className="text-xs font-semibold">Price:</p>
                                        <input type="text" name="price" className="w-full p-2 border bg-white" placeholder="Price!" />
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