import React, { Component } from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import { Trash2, PlusSquare, RefreshCcw } from 'react-feather'
import queryString from 'query-string'

class Basics extends Component {

    constructor() {
        super();
        this.state = {
            message: false,
            basics: {
                site_header: '',
                id: '',
                logo: '',
                categories: '',
                channels: '',
                locator: '',
                twitter: '',
                facebook: '',
                instagram: '',
                youtube: '',

            },
            isEmpty: false,
            selectedFile: null
        }
    }

    componentDidMount() {
        AppService.getMethode('basics')
            .then(response => {
                if (response.length === 0) {
                    this.setState({ isEmpty: true })
                } else {
                    this.setState({
                        basics: response[0]
                    })
                }
            })
            .catch(err => console.error(err));
    }

    handleChange = (property, value) => {
        const { basics } = this.state;
        basics[property] = value;
        this.setState({ basics });
    }

    LabelInput(props) {
        return (
            <div>
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} value={this.state.basics[props.name]} onChange={({ target }) => this.handleChange(props.name, target.value)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    handleClick = () => {
        if (
            this.state.basics.site_header === '' ||
            this.state.basics.categories === '' ||
            this.state.basics.channels === '' ||
            this.state.basics.locator === '' ||
            this.state.basics.twitter === '' ||
            this.state.basics.facebook === '' ||
            this.state.basics.instagram === '' ||
            this.state.basics.youtube === '' ||
            this.state.selectedFile === null
        ) {
            this.setState({
                message: true
            })
        } else {

            const data = new FormData()
            data.append('image', this.state.selectedFile)
            data.append('site_header', this.state.basics.site_header)
            data.append('categories', this.state.basics.categories)
            data.append('channels', this.state.basics.channels)
            data.append('locator', this.state.basics.locator)
            data.append('twitter', this.state.basics.twitter)
            data.append('facebook', this.state.basics.facebook)
            data.append('instagram', this.state.basics.instagram)
            data.append('youtube', this.state.basics.youtube)

            AppService.axiosPost("add-basics", data, {
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
            this.state.basics.site_header === '' ||
            this.state.basics.categories === '' ||
            this.state.basics.channels === '' ||
            this.state.basics.locator === '' ||
            this.state.basics.twitter === '' ||
            this.state.basics.facebook === '' ||
            this.state.basics.instagram === '' ||
            this.state.basics.youtube === '' ||
            this.state.selectedFile === null
        ) {
            this.setState({
                message: true
            })
        } else {

            const data = new FormData()
            const { id, site_header, categories, logo, channels, locator, twitter, facebook, instagram, youtube } = this.state.basics;
            data.append('id', id)
            data.append('image', this.state.selectedFile)
            data.append('logo', logo)
            data.append('site_header', site_header)
            data.append('categories', categories)
            data.append('channels', channels)
            data.append('locator', locator)
            data.append('twitter', twitter)
            data.append('facebook', facebook)
            data.append('instagram', instagram)
            data.append('youtube', youtube)

            AppService.axiosPost("update-basics", data, {
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
                    Basics successfully added!
                </div>
            )
        }
    }

    update() {
        const updateMessage = queryString.parse(this.props.location.search).updateMessage;
        if (updateMessage === "true") {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Basics successfully updated!
                </div>
            )
        }
    }


    render() {

        const { site_header, categories, channels, locator, twitter, facebook, instagram, youtube } = this.state.basics

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
                                    <p className="text-2xl font-semibold text-gray-700">Basics</p>
                                </div>
                                {this.error()}
                                {this.success()}
                                {this.update()}
                                {/* {
                                    this.state.basics.map((item, i) => {
                                        return  */}
                                <div className="flex flex-wrap border-b pb-2">
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Site Header:',
                                                name: 'site_header',
                                                value: site_header,
                                                placeholder: 'Site Header!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-xs font-semibold">Logo:</p>
                                        <input className="mt-2" type="file" name="image" onChange={this.selectedFile} />
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Categories (Section Title):',
                                                name: 'categories',
                                                value: categories,
                                                placeholder: 'Categories (Section Title)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Channels (Section Title):',
                                                name: 'channels',
                                                value: channels,
                                                placeholder: 'Channels (Section Title)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Locator (Section Title):',
                                                name: 'locator',
                                                value: locator,
                                                placeholder: 'Locator (Section Title)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Twitter (link):',
                                                name: 'twitter',
                                                value: twitter,
                                                placeholder: 'Twitter (link)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Facebook (link):',
                                                name: 'facebook',
                                                value: facebook,
                                                placeholder: 'Facebook (link)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Instagram (link):',
                                                name: 'instagram',
                                                value: instagram,
                                                placeholder: 'Instagram (link)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="w-full p-1">
                                            {this.LabelInput({
                                                label: 'Youtube (link):',
                                                name: 'youtube',
                                                value: youtube,
                                                placeholder: 'Youtube (link)!'
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end p-1 mt-4">
                                        {this.button()}
                                    </div>
                                </div>
                                {/* })
                            } */}
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Basics;