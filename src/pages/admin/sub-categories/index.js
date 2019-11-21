import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2 } from 'react-feather'

class SubCategories extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            cat_id: '',
            sub_categories: [],
            categories: []
        }
    }

    onChange(e) {
        this.setState({
            cat_id: e.target.value
        })
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
                <input type="text" name={props.name} onChange={this.handleChange.bind(this, props.property)} className="w-full p-2 border bg-white font-thin" placeholder={props.placeholder} />
            </div>
        )
    }

    handleClick() {
        AppService.postMethode('add-sub-category', {
            name: this.state.name,
            cat_id: this.state.cat_id
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
                                    <p className="text-2xl font-semibold text-gray-700">Sub Category</p>
                                </div>
                                <div className="flex border-b pb-2">
                                    <div className="w-full flex flex-wrap">
                                        <div className="w-8/12 p-1">
                                            {this.LabelInput({
                                                label: 'Name:',
                                                name: 'name',
                                                property: 'name',
                                                placeholder: 'Name!'
                                            })}
                                        </div>
                                        <div className="w-3/12 p-1">
                                            <div className="form-group">

                                                <p className="text-xs font-semibold">Category</p>
                                                <select value={this.state.cat_id} onChange={this.onChange.bind(this)} className="w-full p-2-5 border bg-white outline-none font-thin">
                                                    <option value="select">Select an Option</option>
                                                    {this.state.categories.map((item, i) => {
                                                        return (
                                                            <option value={item.id} key={i}>{item.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/12 p-1 mt-4">
                                        <button onClick={() => { this.handleClick(this.state) }} className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center">Add</button>
                                    </div>
                                </div>
                                <div>
                                    {this.state.sub_categories.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="w-full p-2 flex border-b">
                                                    <div className="w-11/12">
                                                        {item.name}
                                                    </div>
                                                    <div className="w-1/12 text-right">
                                                        <button className="px-3 outline-none"><Trash2 size="14" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout >
        );
    }
}

export default SubCategories;