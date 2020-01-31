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
            successMessage: false,
            updateMessage: false,
            basics: {
                site_header: '',
                id: '',
                logo: '',
                steckers: '',
                homeImage: '',
                ourFoodImage: '',
                findUsImage: '',
                contactUsImage: '',
                categories: '',
                channels: '',
                locators: '',
                twitter: '',
                facebook: '',
                instagram: '',
                youtube: '',
            },
            isEmpty: false,
            selectedFile: null,
            steckers: null,
            homeImage: null,
            ourFoodImage: null,
            findUsImage: null,
            contactUsImage: null,
        }
    }

    componentDidMount() {
        AppService.getMethode('basics/get')
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
            this.state.basics.locators === '' ||
            this.state.basics.twitter === '' ||
            this.state.basics.facebook === '' ||
            this.state.basics.instagram === '' ||
            this.state.basics.youtube === '' ||
            this.state.selectedFile === null ||
            this.state.steckers === null ||
            this.state.homeImage === null ||
            this.state.findUsImage === null ||
            this.state.contactUsImage === null ||
            this.state.ourFoodImage === null
        ) {
            this.setState({
                message: true
            })
        } else {
            const data = new FormData()
            data.append('image', this.state.selectedFile)
            data.append('steckers', this.state.steckers)
            data.append('homeImage', this.state.homeImage)
            data.append('findUsImage', this.state.findUsImage)
            data.append('contactUsImage', this.state.contactUsImage)
            data.append('ourFoodImage', this.state.ourFoodImage)
            data.append('site_header', this.state.basics.site_header)
            data.append('categories', this.state.basics.categories)
            data.append('channels', this.state.basics.channels)
            data.append('locators', this.state.basics.locators)
            data.append('twitter', this.state.basics.twitter)
            data.append('facebook', this.state.basics.facebook)
            data.append('instagram', this.state.basics.instagram)
            data.append('youtube', this.state.basics.youtube)

            console.log(data)
            AppService.axiosPost("basics/add", data)
                .then(response => {
                    AppService.getMethode('basics/get')
                        .then(response => {
                            if (response.length === 0) {
                                this.setState({ isEmpty: true })
                            } else {
                                this.setState({
                                    basics: response[0],
                                    successMessage: true
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
            this.state.basics.site_header === '' ||
            this.state.basics.categories === '' ||
            this.state.basics.channels === '' ||
            this.state.basics.locators === '' ||
            this.state.basics.twitter === '' ||
            this.state.basics.facebook === '' ||
            this.state.basics.instagram === '' ||
            this.state.basics.youtube === '' ||
            this.state.selectedFile === null ||
            this.state.steckers === null ||
            this.state.homeImage === null ||
            this.state.findUsImage === null ||
            this.state.contactUsImage === null ||
            this.state.ourFoodImage === null
        ) {
            this.setState({
                message: true
            })
        } else {

            const data = new FormData()
            const { id, site_header, categories, logo, steckers, homeImage, findUsImage, contactUsImage, ourFoodImage, channels, locators, twitter, facebook, instagram, youtube } = this.state.basics;
            data.append('id', id)
            data.append('image', this.state.selectedFile)
            data.append('steckers', this.state.steckers)
            data.append('homeImage', this.state.homeImage)
            data.append('findUsImage', this.state.findUsImage)
            data.append('contactUsImage', this.state.contactUsImage)
            data.append('ourFoodImage', this.state.ourFoodImage)
            data.append('logo', logo)
            data.append('steckers', steckers)
            data.append('homeImage', homeImage)
            data.append('findUsImage', findUsImage)
            data.append('contactUsImage', contactUsImage)
            data.append('ourFoodImage', ourFoodImage)
            data.append('site_header', site_header)
            data.append('categories', categories)
            data.append('channels', channels)
            data.append('locators', locators)
            data.append('twitter', twitter)
            data.append('facebook', facebook)
            data.append('instagram', instagram)
            data.append('youtube', youtube)

            AppService.axiosPost("basics/update", data, {
            })
                .then(response => {
                    AppService.getMethode('basics/get')
                        .then(response => {
                            if (response.length === 0) {
                                this.setState({ isEmpty: true })
                            } else {
                                this.setState({
                                    basics: response[0],
                                    updateMessage: true
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
    }

    homeImage = event => {
        this.setState({
            homeImage: event.target.files[0],
            loaded: 0
        })
    }

    steckers = event => {
        this.setState({
            steckers: event.target.files[0],
            loaded: 0
        })
    }

    ourFoodImage = event => {
        this.setState({
            ourFoodImage: event.target.files[0],
            loaded: 0
        })
    }

    findUsImage = event => {
        this.setState({
            findUsImage: event.target.files[0],
            loaded: 0
        })
    }

    contactUsImage = event => {
        this.setState({
            contactUsImage: event.target.files[0],
            loaded: 0
        })
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
        if (this.state.successMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Basics successfully added!
                </div>
            )
        }
    }

    update() {
        if (this.state.updateMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Basics successfully updated!
                </div>
            )
        }
    }


    render() {

        const { site_header, categories, channels, locators, twitter, facebook, instagram, youtube } = this.state.basics

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
                                                name: 'locators',
                                                value: locators,
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
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Logo:</p>
                                        <input className="mt-2" type="file" name="image" onChange={this.selectedFile} />
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Stickers:</p>
                                        <input className="mt-2" type="file" name="stickers" onChange={this.steckers} />
                                    </div>
                                    <div className="w-full border-t border-b my-4 py-2 text-center">
                                        <p className="font-semibold text-gray-700">
                                            Background Images
                                        </p>
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Home:</p>
                                        <input className="mt-2" type="file" name="homeImage" onChange={this.homeImage} />
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Our Food:</p>
                                        <input className="mt-2" type="file" name="ourFoodImage" onChange={this.ourFoodImage} />
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Find Us:</p>
                                        <input className="mt-2" type="file" name="findUsImage" onChange={this.findUsImage} />
                                    </div>
                                    <div className="w-1/2 p-1">
                                        <p className="text-xs font-semibold">Contact Us:</p>
                                        <input className="mt-2" type="file" name="contactUsImage" onChange={this.contactUsImage} />
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