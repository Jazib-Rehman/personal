import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import queryString from 'query-string'
import { Trash2, PlusSquare } from 'react-feather'
import appService from './../../../services/app.service'

class Tags extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: [],
            tags: [],
            product: {
                name: '',
                cat_id: '',
                subcat_id: '',
                description: '',
                nutrition: '',
                price: '',
                image: '',
            },
            tag: '',
            message: false,
            successMessage: false,
            catMethod: "Category",
            selectedFile: null
        }
    }

    radioChangeHandler = (event) => {

        this.setState({
            catMethod: event.target.value
        });
    }

    onChange(property, event) {
        const state = this.state;
        state[property] = event.target.value;
        this.setState({ state: state });
    }


    onSelectChange = event => {
        if (event.target.name === "cat_id") {
            this.setState({
                cat_id: event.target.value,
                subcat_id: ''
            })
        } else if (event.target.name === "subcat_id") {
            this.setState({
                cat_id: '',
                subcat_id: event.target.value
            })
        }
    }


    componentDidMount() {
        const id = queryString.parse(this.props.location.search).id
        AppService.getProductById(id)
            .then(response => {
                const { product, categories } = response
                this.setState({
                    product,
                    categories
                })
            })
            .catch(err => console.error(err));
        AppService.getTagsById(id)
            .then(response => {
                console.log(response)
                this.setState({
                    tags: response
                })
            })
            .catch(err => console.error(err));
    }

    handleChange = (event) => {
        this.setState({
            tag: event.target.value
        })
    }

    handleClick = () => {
        if (
            this.state.tag === ''
        ) {
            this.setState({
                message: true,
                successMessage: false
            })
        } else {
            const id = queryString.parse(this.props.location.search).id
            AppService.post("add-tag", {
                name: this.state.tag,
                pro_id: id
            })
                .then(res => {
                    AppService.getTagsById(id)
                        .then(response => {
                            this.setState({
                                tags: response,
                                message: false,
                                successMessage: true,
                            })
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }

    handleSubmit() {
        window.location.replace('/admin/products')
    }

    selectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
        console.log(event.target.files[0])
    }

    error() {
        if (this.state.message === true) {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Kindly enter a tag name!
                </div>
            )
        }
    }

    success() {
        if (this.state.successMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Tag Successfully added!
                </div>
            )
        }
    }

    category() {
        return this.state.categories.map((item, i) => {
            const id = "" + item.id + ""
            if (id === this.state.product.cat_id) {
                return <p key={i} className="text-sm font-thin px-2">{item.name}</p>
            }
        })
    }

    render() {
        const { name, nutrition, description, cat_id, price, image } = this.state.product;
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
                                    <p className="text-2xl font-semibold text-gray-700">Product added</p>
                                </div>
                                <div className="pb-2">
                                    {this.error()}
                                    {this.success()}
                                </div>
                                <div className="flex flex-wrap border-b">
                                    <div className="w-1/4 flex justify-center text-center">
                                        <div className="pb-6">
                                            <img src={"./../" + image} />
                                            <p className="text-sm font-bold">{name}</p>
                                            <div className="flex flex-wrap justify-center">
                                                {
                                                    this.state.tags.map((item, i) => {
                                                        return <div key={i} className="mt-1 flex items-center inline-block px-3 py-1 rounded-full bg-orange-400 text-white text-xs mr-1">
                                                            <p className="px-1">{item.name}</p>
                                                            <Trash2 size="14" />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3/4 px-4 py-6">
                                        <div className="flex flex-wrap py-2">
                                            <p className="text-sm font-bold">Description:</p>
                                            <p className="text-sm font-thin px-2">{description}</p>
                                        </div>
                                        <div className="flex flex-wrap py-2">
                                            <p className="text-sm font-bold">Nutrition:</p>
                                            <p className="text-sm font-thin px-2">{nutrition}</p>
                                        </div>
                                        <div className="flex flex-wrap py-2">
                                            <p className="text-sm font-bold">Price:</p>
                                            <p className="text-sm font-thin px-2">{price}</p>
                                        </div>
                                        <div className="flex flex-wrap py-2">
                                            <p className="text-sm font-bold">Category:</p>
                                            {this.category()}
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 border-b">
                                    <p className="text-xs font-semibold">Would you like to add some tags to this product?</p>
                                    <div className="flex flex-wrap">
                                        <input type="text" name="tag" onChange={this.handleChange} className="mr-1 flex-grow p-2 border bg-white" placeholder="Enter a Tag!" />
                                        <button onClick={this.handleClick} className="bg-gray-200 hover:bg-gray-300 rounded p-2 flex justify-center items-center">
                                            <PlusSquare />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full flex justify-end p-1 mt-4">
                                    <input type="button" onClick={this.handleSubmit} value="Submit" className="rounded bg-green-500 hover:bg-green-600 p-2 flex justify-center items-center text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout >
        )
    }

}

export default Tags