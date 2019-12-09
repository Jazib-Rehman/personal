import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2, PlusSquare, RefreshCcw } from 'react-feather'
import queryString from 'query-string'

class About extends Component {

    constructor() {
        super();
        this.state = {
            message: false,
            about: {
                id: '',
                title: '',
                description: '',
                phone: '',
                email: '',
                address: ''
            },
            isEmpty: false,
            selectedFile: null
        }
    }

    componentDidMount() {
        AppService.getMethode('about')
            .then(response => {
                if (response.length === 0) {
                    this.setState({ isEmpty: true })
                } else {
                    this.setState({
                        about: response[0]
                    })
                }
            })
            .catch(err => console.error(err));
    }

    handleChange = (property, value) => {
        const { about } = this.state;
        about[property] = value;
        this.setState({ about });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} value={this.state.about[props.name]} onChange={({ target }) => this.handleChange(props.name, target.value)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    handleClick = () => {
        if (
            this.state.about.title === '' ||
            this.state.about.description === '' ||
            this.state.about.phone === '' ||
            this.state.about.email === '' ||
            this.state.about.address === ''
        ) {
            this.setState({
                message: true
            })
        } else {
            AppService.postMethode("add-about", this.state.about, {
            })
                .then(response => {
                    // window.location.reload();
                    window.location.href = window.location.pathname + "?successMessage=true"
                })
                .catch(err => console.error(err));
        }
    }

    handleUpdate = () => {
        if (
            this.state.about.title === '' ||
            this.state.about.description === '' ||
            this.state.about.phone === '' ||
            this.state.about.email === '' ||
            this.state.about.address === ''
        ) {
            this.setState({
                message: true
            })
        } else {
            AppService.postMethode("update-about", this.state.about, {
            })
                .then(response => {
                    // window.location.reload();
                    window.location.href = window.location.pathname + "?updateMessage=true"
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
        AppService.axiosPost("delete-banner", product, {
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
                    Kindly fill all fields!
                </div>
            )
        }
    }

    button() {
        if (this.state.isEmpty === true) {
            return <button onClick={this.handleClick} className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center">
                Add <PlusSquare size="16" className="ml-1" />
            </button>
        } else {
            return <button onClick={this.handleUpdate} className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center">
                Update <RefreshCcw size="16" className="ml-1" />
            </button>
        }
    }

    success() {
        const successMessage = queryString.parse(this.props.location.search).successMessage;
        if (successMessage === "true") {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    About Us successfully added!
                </div>
            )
        }
    }

    update() {
        const updateMessage = queryString.parse(this.props.location.search).updateMessage;
        if (updateMessage === "true") {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    About Us successfully updated!
                </div>
            )
        }
    }


    render() {

        const { title, description, phone, email, address } = this.state.about

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
                                    <p className="text-2xl font-semibold text-gray-700">About Us</p>
                                </div>
                                {this.error()}
                                {this.success()}
                                {this.update()}
                                <div className="flex flex-wrap border-b pb-2">
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Title:',
                                                name: 'title',
                                                value: title,
                                                placeholder: 'Title!'
                                            })}
                                        </div>
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Phone:',
                                                name: 'phone',
                                                value: phone,
                                                placeholder: 'Phone!'
                                            })}
                                        </div>
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'E-mail',
                                                name: 'email',
                                                value: email,
                                                placeholder: 'E-mail!'
                                            })}
                                        </div>
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Address',
                                                name: 'address',
                                                value: address,
                                                placeholder: 'Address!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            <p className="text-xs font-semibold">Description:</p>
                                            <textarea name="description" value={description} onChange={({ target }) => this.handleChange("description", target.value)} placeholder="Description!" className="w-full h-64 p-2 border bg-white">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end p-1 mt-4">
                                        {this.button()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default About;