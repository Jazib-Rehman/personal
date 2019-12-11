import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2 } from 'react-feather'
import queryString from 'query-string'

class Categories extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            message: false,
            successMessage: false,
            categories: [],
            selectedFile: null
        }
    }

    componentDidMount() {
        AppService.getMethode('category')
            .then(response => {
                this.setState({ categories: response })
            })
            .catch(err => console.error(err));
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} onChange={this.handleChange} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    handleClick = () => {
        if (
            this.state.name === '' ||
            this.state.selectedFile === null
        ) {
            this.setState({
                message: true,
                successMessage: false,
                deleteMessage: false
            })
        } else {

            const data = new FormData()
            data.append('image', this.state.selectedFile)
            data.append('name', this.state.name)

            AppService.axiosPost("add-category", data, {
            })
                .then(response => {
                    AppService.getMethode('category')
                        .then(response => {
                            this.setState({
                                categories: response,
                                successMessage: true,
                                deleteMessage: false,
                                message: false,
                            })
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }

    selectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
        console.log(event.target.files[0])
    }

    onTrashClick = product => {
        AppService.axiosPost("delete-category", product, {
        })
            .then(response => {
                AppService.getMethode('category')
                    .then(response => {
                        this.setState({
                            categories: response,
                            successMessage: false,
                            deleteMessage: true,
                            message: false,
                        })
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }

    error() {
        if (this.state.message === true) {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Either Name or Image is missing!
                </div>
            )
        }
    }

    success() {
        if (this.state.successMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Category successfully added!
                </div>
            )
        }
    }

    delete() {
        if (this.state.deleteMessage === true) {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Category successfully deleted!
                </div>
            )
        }
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
                                    <p className="text-2xl font-semibold text-gray-700">Category</p>
                                </div>
                                {this.error()}
                                {this.success()}
                                {this.delete()}
                                <div className="flex border-b pb-2">
                                    <div className="w-7/12 flex flex-wrap">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Name:',
                                                name: 'name',
                                                placeholder: 'Name!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-4/12 flex flex-wrap">
                                        <div className="w-full p-1">
                                            <input className="mt-6" type="file" name="image" onChange={this.selectedFile} />
                                        </div>
                                    </div>
                                    <div className="w-1/12 p-1 mt-4">
                                        <input type="button" onClick={this.handleClick} value="Add" className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap py-2 w-full border-b">
                                    {this.state.categories.map((item, i) => {
                                        return (
                                            <div key={i} className="w-1/5">
                                                <div className="p-2">
                                                    <div className="relative rounded overflow-hidden">
                                                        <img src={"./../" + item.image} className="m-auto w-32 h-32 object-cover rounded-lg" />
                                                        <div className="mb-3 absolute bottom-0 w-full h-full flex items-center justify-center">
                                                            <div className="bg-trans rounded text-white p-1">
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                        <div className="-mb-6 absolute bottom-0 w-full h-full flex items-center justify-center">
                                                            <button className="bg-trans rounded text-white p-2 outline-none" onClick={this.onTrashClick.bind(this, item)}><Trash2 size="14" /></button>
                                                        </div>
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
            </AdminLayout>
        );
    }
}

export default Categories;