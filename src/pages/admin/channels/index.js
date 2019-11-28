import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2 } from 'react-feather'

class Channels extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            link: '',
            channels: [],
            selectedFile: null
        }
    }

    componentDidMount() {
        AppService.getMethode('channels')
            .then(response => {
                this.setState({ channels: response })
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

    handleClick = () => {
        const data = new FormData()
        data.append('image', this.state.selectedFile)
        data.append('name', this.state.name)
        data.append('link', this.state.link)

        AppService.axiosPost("add-channel", data, {
        })
            .then(response => {
                window.location.reload();
            })
            .catch(err => console.error(err));
    }

    selectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
        console.log(event.target.files[0])
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
                                    <p className="text-2xl font-semibold text-gray-700">Channels</p>
                                </div>
                                {/* <form method="post" enctype="multipart/form-data" action="http://localhost:3001/add-category"> */}
                                <div className="flex border-b pb-2">
                                    <div className="w-3/12 flex flex-wrap">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Name:',
                                                name: 'name',
                                                property: 'name',
                                                placeholder: 'Name!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-4/12 flex flex-wrap">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Instagram Link:',
                                                name: 'link',
                                                property: 'link',
                                                placeholder: 'Instagram Link!'
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
                                {/* </form> */}
                                <div>
                                    {this.state.channels.map((item, i) => {
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
            </AdminLayout>
        );
    }
}

export default Channels;