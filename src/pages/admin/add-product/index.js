import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import Meal from './../../../components/meal'
import Card from '../../../components/kit/card'
import { Layers, PlusCircle, Eye, RefreshCw, Inbox, FileText, MapPin, Coffee, Info } from 'react-feather';
import AppService from './../../../services/app.service'
class AppProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            cat_id: '',
            subcat_id: '',
            description: '',
            nutrition: '',
            price: '',
            image: '',
            sub_categories: [],
            categories: []
        }
    }

    onChange(property, event) {
        const state = this.state;
        state[property] = event.target.value;
        this.setState({ state: state });
    }


    componentDidMount() {
        AppService.getMethode('sub-category')
            .then(response => {
                this.setState({ sub_categories: response })
            })
            .catch(err => console.error(err));
        AppService.getMethode('category')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
    }

    handleChange = (property, event) => {
        const state = this.state;
        state[property] = event.target.value;
        this.setState({ state: state });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} onChange={this.handleChange.bind(this, props.property)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    handleClick() {
        AppService.postMethode('add-product', {
            name: this.state.name,
            cat_id: this.state.cat_id,
            subcat_id: this.state.subcat_id,
            description: this.state.description,
            nutrition: this.state.nutrition,
            price: this.state.price,
            image: 'this is image',
        })
            .then(response => {
                alert('Category added');
                window.location.reload();
            })
            .catch(err => console.error(err));
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
                                            property: 'name',
                                            placeholder: 'Name!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Nutrition Information:',
                                            name: 'nutrition',
                                            property: 'nutrition',
                                            placeholder: 'Nutrition Info!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Description:</p>
                                        <textarea name="description" onChange={this.handleChange.bind(this, 'description')} className="w-full p-2 border bg-white rounded rounded-sm" placeholder="Description!"></textarea>
                                    </div>
                                    <div className="w-1/2 p-1">
                                        {this.LabelInput({
                                            label: 'Price:',
                                            name: 'price',
                                            property: 'price',
                                            placeholder: 'Price!'
                                        })}
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <div className="form-group">
                                            <p className="text-xs font-semibold">Category</p>
                                            <select value={this.state.cat_id} onChange={this.onChange.bind(this, 'cat_id')} className="w-full p-2-5 border bg-white outline-none font-thin">
                                                <option value="select">Select an Option</option>
                                                {this.state.categories.map((item, i) => {
                                                    return (
                                                        <option value={item.id} key={i}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <div className="form-group">
                                            <p className="text-xs font-semibold">Sub Category</p>
                                            <select value={this.state.subcat_id} onChange={this.onChange.bind(this, 'subcat_id')} className="w-full p-2-5 border bg-white outline-none font-thin">
                                                <option value="select">Select an Option</option>
                                                {this.state.sub_categories.map((item, i) => {
                                                    return (
                                                        <option value={item.id} key={i}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-end p-1 mt-4">
                                    <button onClick={() => { this.handleClick(this.state) }} className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center">Add</button>
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