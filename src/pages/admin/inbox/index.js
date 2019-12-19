import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2, PlusSquare, RefreshCcw } from 'react-feather'
import queryString from 'query-string'

class Inbox extends Component {

    constructor() {
        super();
        this.state = {
            message: []
        }
    }

    componentDidMount() {
        AppService.getMethode('contacts/get')
            .then(response => {
                if (response.length === 0) {
                    this.setState({ isEmpty: true })
                } else {
                    this.setState({
                        message: response
                    })
                }
            })
            .catch(err => console.error(err));
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
                    // window.location.reload();
                    window.location.href = window.location.pathname + "?successMessage=true"
                })
                .catch(err => console.error(err));
        }
    }



    onTrashClick = product => {
        AppService.axiosPost("delete-message", product, {
        })
            .then(response => {
                // window.location.reload();
                window.location.href = window.location.pathname + "?deleteMessage=true"
            })
            .catch(err => console.error(err));
    }

    delete() {
        const deleteMessage = queryString.parse(this.props.location.search).deleteMessage;
        if (deleteMessage === "true") {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Message successfully deleted!
                </div>
            )
        }
    }

    message() {

        if (this.state.message.length === 0) {
            return <p className="text-2xl font-thin">We have no feedback yet!</p>
        } else {
            return <div className="w-full">
                {
                    this.state.message.map((item, i) => {
                        const name = item.f_name + " " + item.l_name;
                        return <div className="overflow-hidden border-b w-full flex">
                            <div className="w-8/12 py-2">
                                {item.message}
                            </div>
                            <div className="w-3/12 py-2">
                                {name}
                            </div>
                            <div className="w-1/12 py-2 flex justify-end">
                                <button className="outline-none" onClick={this.onTrashClick.bind(this, item)}><Trash2 size="14" /></button>
                            </div>
                        </div>
                    })
                }
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
                                    <p className="text-2xl font-semibold text-gray-700">Inbox</p>
                                </div>
                                {this.delete()}
                                <div className="flex flex-wrap justify-center py-2 w-full">
                                    <div className="overflow-hidden border-b w-full flex">
                                        <div className="w-9/12 py-2">
                                            <p className="text-sm font-bold">Message</p>
                                        </div>
                                        <div className="w-3/12 py-2">
                                            <p className="text-sm font-bold">Name</p>
                                        </div>
                                        <div className="w-1/12 py-2 flex justify-end">
                                            <p className="text-sm font-bold">Action</p>
                                        </div>
                                    </div>
                                    {this.message()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Inbox;