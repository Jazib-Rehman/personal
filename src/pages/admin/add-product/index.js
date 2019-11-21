import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import Meal from './../../../components/meal'
import Card from '../../../components/kit/card'
import { Layers, PlusCircle, Eye, RefreshCw, Inbox, FileText, MapPin, Coffee, Info } from 'react-feather';

class AppProduct extends React.Component {

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} onChange={this.handleChange} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
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
                                        {this.LabelInput({
                                            label: 'Name:',
                                            name: 'name',
                                            placeholder: 'Name!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Nutrition Information:',
                                            name: 'nutrition',
                                            placeholder: 'Nutrition Info!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Description:</p>
                                        <textarea name="description" className="w-full p-2 border bg-white rounded rounded-sm" placeholder="Description!"></textarea>
                                    </div>
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Price:',
                                            name: 'price',
                                            placeholder: 'Price!'
                                        })}
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

export default AppProduct