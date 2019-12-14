import React from 'react'
import AdminLayout from './../AdminLayout'
import LeftNavbar from './../components/LeftNavbar'
import Header from './../components/Header'
import AppService from './../../../services/app.service'
import queryString from 'query-string'
import { PlusSquare, Trash2 } from 'react-feather'

class Edit extends React.Component {

    constructor(props) {
        super(props);
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
            proIds: [],
            message: false,
            tagError: false,
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
                this.setState({
                    tags: response
                })
            })
            .catch(err => console.error(err));
    }

    handleChange = (property, value) => {
        const { product } = this.state;
        product[property] = value;
        this.setState({ product });
    }

    handleTagChange = (e) => {
        this.setState({
            tag: e
        });
    }

    LabelInput(props) {
        return (
            <div className="py-2">
                <p className="text-xs font-semibold">{props.label}</p>
                <input type="text" name={props.name} value={this.state.product[props.property]} onChange={({ target }) => this.handleChange(props.property, target.value)} className="w-full p-2 border bg-white" placeholder={props.placeholder} />
            </div>
        )
    }

    Dropdown(cat) {
        // if (cat == "Category") {
        return (
            <div className="form-group">
                <p className="text-xs font-semibold">Category</p>
                <select value={this.state.product.cat_id} name="cat_id" onChange={({ target }) => this.handleChange("cat_id", target.value)} className="w-full p-2-5 border bg-white outline-none font-thin">
                    {/* <option value={this.state.product.cat_id}>Select a Category</option> */}
                    {this.state.categories.map((item, i) => {
                        return (
                            <option value={item.id} key={i}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }

    handleClick = () => {
        if (
            this.state.name === '' ||
            this.state.selectedFile === null ||
            this.state.cat_id === '' ||
            this.state.description === '' ||
            this.state.nutrition === '' ||
            this.state.price === ''
        ) {
            this.setState({
                message: true,
                tagError: false,
                successMessage: false,
            })
        } else {

            const data = new FormData()
            const { id, name, description, cat_id, subcat_id, nutrition, price, image } = this.state.product;
            data.append('id', id)
            data.append('image', this.state.selectedFile)
            data.append('name', name)
            data.append('cat_id', cat_id)
            data.append('subcat_id', subcat_id)
            data.append('description', description)
            data.append('nutrition', nutrition)
            data.append('price', price)
            data.append('img', image)

            AppService.axiosPost("update-product", data, {
            })
                .then(response => {
                    const id = queryString.parse(this.props.location.search).id
                    AppService.getProductById(id)
                        .then(response => {
                            const { product, categories } = response
                            this.setState({
                                product,
                                categories,
                                successMessage: true,
                                message: false
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
    }

    handleTags = () => {
        if (
            this.state.tag === ''
        ) {
            this.setState({
                tagError: true,
                message: false,
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
                                successMessage: false,
                                message: false,
                                tagError: false,
                                tag: ''
                            })
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }

    deleteTag(tagId) {
        const id = queryString.parse(this.props.location.search).id
        AppService.postMethode("delete-tag", {
            id: tagId
        })
            .then(res => {
                AppService.getTagsById(id)
                    .then(response => {
                        this.setState({
                            tags: response,
                            successMessage: false,
                            message: false,
                            tagError: false,
                            tag: ''
                        })
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }

    formUI() {
        const { name, nutrition, cat_id, description, price, image } = this.state.product

        return (
            <div>
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-1">
                        {this.LabelInput({
                            label: 'Name:',
                            name: 'name',
                            property: 'name',
                            value: name,
                            placeholder: 'Name!'
                        })}
                        <div className="mt-2">
                            <p className="text-xs font-semibold">Description:</p>
                            <textarea className="w-full text-box p-2 border bg-white" name="description" value={description} onChange={({ target }) => this.handleChange('description', target.value)} placeholder="Description!"></textarea>
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        {this.LabelInput({
                            label: 'Nutrition Information:',
                            name: 'nutrition',
                            property: 'nutrition',
                            value: nutrition,
                            placeholder: 'Nutrition Info!'
                        })}
                        {this.LabelInput({
                            label: 'Price:',
                            name: 'price',
                            property: 'price',
                            value: price,
                            placeholder: 'Price!'
                        })}
                        {this.Dropdown(this.state.catMethod)}
                    </div>
                    <div className="flex items-end w-full">
                        <div className="w-1/2 px-1 py-3 border-b">
                            <input type="file" className="" name="image" onChange={this.selectedFile} />
                        </div>
                        <div className="w-1/2 px-1 border-b">
                            {
                                this.state.tags.map((item, i) => {
                                    return (
                                        <div key={i} className="flex flex-wrap border-b">
                                            <div className="text-sm flex-grow">{item.name}</div>
                                            <button onClick={this.deleteTag.bind(this, item.id)} className="">
                                                <Trash2 size="13" />
                                            </button>
                                        </div>
                                    )
                                })
                            }
                            <div className="pt-1">
                                {this.tagError()}
                            </div>
                            <div className="flex flex-wrap items-end w-full">
                                <div className="flex-grow pr-2">
                                    <div className="py-2">
                                        <p className="text-xs font-semibold">Add Tags:</p>
                                        <input type="text" name="tag" value={this.state.tag} onChange={({ target }) => this.handleTagChange(target.value)} className="w-full p-2 border bg-white" placeholder="Tags!" />
                                    </div>
                                </div>
                                <button onClick={this.handleTags} className="btn-gray rounded mb-2 bg-gray-300 hover:bg-gray-500 px-2">
                                    <PlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full flex justify-end p-1 mt-4">
                    <input type="button" onClick={this.handleClick} value="Update" className="rounded bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center" />
                </div>
            </div>
        )
    }

    error() {
        if (this.state.message === true) {
            return (
                <div className="bg-red-500 py-2 px-4 text-white">
                    Kindly check all fields! (All fields should be filled!)
                </div>
            )
        }
    }

    tagError() {
        if (this.state.tagError === true) {
            return (
                <div className="bg-red-500 py-1 px-2 text-white">
                    The field is empty!
                </div>
            )
        }
    }

    success() {
        if (this.state.successMessage === true) {
            return (
                <div className="bg-green-500 py-2 px-4 text-white">
                    Product is successfully updated!
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
                                    <p className="text-2xl font-semibold text-gray-700">Edit Product</p>
                                </div>
                                {this.error()}
                                {this.success()}
                                {this.formUI()}
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Edit