import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2 } from 'react-feather'

class Locator extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            message: false,
            locators: [],
            selectedFile: null
        }
    }

    componentDidMount() {
        AppService.getMethode('locators')
            .then(response => {
                this.setState({ locators: response })
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
                message: true
            })
        } else {

            const data = new FormData()
            data.append('image', this.state.selectedFile)
            data.append('name', this.state.name)

            AppService.axiosPost("add-locator", data, {
            })
                .then(response => {
                    window.location.reload();
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
        AppService.axiosPost("delete-locator", product, {
        })
            .then(response => {
                window.location.reload();
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
                                    <p className="text-2xl font-semibold text-gray-700">Store Locator</p>
                                </div>
                                {this.error()}
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
                                <div className="flex flex-wrap">
                                    {this.state.locators.map((item, i) => {
                                        return (
                                            <div key={i} className="w-1/4">
                                                <div className="p-2 mt-6">
                                                    <div className="relative">
                                                        <div className="bg-prim py-1 text-white text-center">
                                                            <p className="text-2xl font-light">{item.name}</p>
                                                        </div>
                                                        <img src={"./../" + item.image} alt="dummy" className="w-full h-full fit-cover" />
                                                        <div className="absolute bottom-0 w-full flex justify-center">
                                                            <button className="p-2 text-white rounded mb-5 outline-none bg-trans" onClick={this.onTrashClick.bind(this, item)}><Trash2 size="14" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="w-full p-2 flex border-b">
                                                    <div className="w-11/12">
                                                        {item.name}
                                                    </div> */}
                                            </div>
                                            // </div>
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

export default Locator;