import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2, PlusSquare, RefreshCcw } from 'react-feather'
import queryString from 'query-string'

class PDF extends Component {

    constructor() {
        super();
        this.state = {
            message: false,
            deleteMessage: false,
            successMessage: false,
            updateMessage: false,
            pdf: {
                id: '',
                name: '',
                image: ''
            },
            selectedFile: null,
            isEmpty: false,
        }
    }

    componentDidMount() {
        AppService.getMethode('pdf/get')
            .then(response => {
                console.log(response[0])
                if (response.length === 0) {
                    this.setState({ isEmpty: true })
                } else {
                    this.setState({
                        pdf: response[0]
                    })
                }
            })
            .catch(err => console.error(err));
    }

    handleChange = (property, value) => {
        const { pdf } = this.state;
        pdf[property] = value;
        this.setState({ pdf });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} value={this.state.pdf[props.name]} onChange={({ target }) => this.handleChange(props.name, target.value)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    handleClick = () => {
        // console.log(this.state.pdf)
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
            data.append('name', this.state.pdf.name)

            AppService.axiosPost("add-pdf", data, {
            })
                .then(response => {
                    AppService.getMethode('pdf')
                        .then(response => {
                            console.log(response[0])
                            if (response.length === 0) {
                                this.setState({ isEmpty: true })
                            } else {
                                this.setState({
                                    pdf: response[0],
                                    successMessage: true,
                                    isEmpty: false
                                })
                            }
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }

    handleUpdate = () => {
        if (
            this.state.name === '' ||
            this.state.selectedFile === null
        ) {
            this.setState({
                message: true
            })
        } else {

            const data = new FormData()
            data.append('id', this.state.pdf.id)
            data.append('name', this.state.pdf.name)
            data.append('image', this.state.selectedFile)
            data.append('img', this.state.pdf.image)

            AppService.axiosPost("update-pdf", data, {
            })
                .then(response => {
                    AppService.getMethode('pdf')
                        .then(response => {
                            console.log(response[0])
                            if (response.length === 0) {
                                this.setState({ isEmpty: true })
                            } else {
                                this.setState({
                                    pdf: response[0],
                                    updateMessage: true,
                                })
                            }
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
                AppService.getMethode('pdf')
                    .then(response => {
                        console.log(response[0])
                        if (response.length === 0) {
                            this.setState({ isEmpty: true })
                        } else {
                            this.setState({
                                pdf: response[0],
                                deleteMessage: true
                            })
                        }
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
                    Menu (pdf) successfully added!
                </div>
            )
        }
    }

    update() {
        if (this.state.updateMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Menu (pdf) successfully updated!
                </div>
            )
        }
    }

    delete() {
        if (this.state.deleteMessage === true) {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Menu (pdf) successfully deleted!
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

    pdf() {
        if (this.state.pdf.image === '') {
            return <p className="text-2xl font-thin">No Menu (pdf) is uploaded</p>
        } else {
            return <div className="p-2 flex justify-center">
                <div className=" relative rounded overflow-hidden w-2/5">
                    <img src="./../uploads/siteHeaders/bg6.jpg" />
                    <div className="absolute bottom-0 w-full h-full flex items-center justify-center">
                        <div className="bg-trans rounded text-white p-1">
                            {this.state.pdf.name}
                        </div>
                    </div>
                    <div className="-mb-6 absolute bottom-0 w-full h-full flex items-center justify-center">
                        {/* <button className="bg-trans rounded text-white p-2 outline-none" onClick={this.onTrashClick.bind(this, this.state.pdf)}><Trash2 size="14" /></button> */}
                    </div>
                </div>
            </div>
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
                                    <p className="text-2xl font-semibold text-gray-700">Menu (PDF)</p>
                                </div>
                                {this.error()}
                                {this.success()}
                                {this.update()}
                                {this.delete()}
                                <div className="flex border-b pb-2">
                                    <div className="w-7/12 flex flex-wrap">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Name:',
                                                name: 'name',
                                                value: this.state.pdf.name,
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
                                        {this.button()}
                                        {/* <input type="button" onClick={this.handleClick} value="Add" className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center" /> */}
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center py-2 w-full border-b">
                                    {this.pdf()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default PDF;